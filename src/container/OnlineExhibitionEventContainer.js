import React, { useCallback, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { secondModalOpen, modalClose } from '../store/modal';

import { makeStyles } from '@material-ui/core/styles';
import { Backdrop } from '@material-ui/core';
import { postUserEvent } from '../api/UserAPI';
import { useHistory } from 'react-router-dom';
import { Paths } from '../paths';
import { isCellPhoneForm, isEmailForm } from '../lib/formatChecker';
/* Redux */

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 90,
    },
}));

const OnlineExhibitionEventContainer = () => {

    const language = useSelector(state => state.language.current);
    const viewId = useSelector(state => state.exhibition.current);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const secondOpen = useCallback(() => dispatch(secondModalOpen()), [dispatch]);
    const close = useCallback(() => dispatch(modalClose()), [dispatch]);

    const states = useSelector(state => state.modal);
    const { first, second, open } = states;

    const [state, action] = useReducer(reducer, {
        name: '',
        position: '', // 소속
        title: '', // 직함
        phone: '', // 휴대폰 번호
        tel: '', // 전화번호
        email: ''
        // frontEmail: '',
        // backEmail: ''
    });
    const { name, position, title, phone, tel, email } = state;
    const onChange = (e) => action(e.target);

    const [phoneForm, setPhoneForm] = useState(false);
    const [emailForm, setEmailForm] = useState(false);

    const formCheck = useCallback(() => {
        const phoneData = isCellPhoneForm(phone, true);
        const emailData = isEmailForm(email);

        if (!phoneData && !emailData) { // 둘다 틀림
            alert("휴대폰 번호와 이메일 주소를 확인해 주세요.");
            setPhoneForm(false); setEmailForm(false);
        } else if (!phoneData && emailData) {
            alert("휴대폰 번호를 확인해 주세요.");
            setPhoneForm(false);
        } else if (phoneData && !emailData) {
            alert("이메일 주소를 확인해 주세요.");
            setEmailForm(false);
        } else {
            setPhoneForm(true); setEmailForm(true);
        }
    }, [phone, email])

    const inputCheck = useCallback(async (e) => {

        e.preventDefault();
        formCheck();

        if (phoneForm && emailForm) { // 두가지의 양식이 일치할 경우
            // setLoading(true);
            try {
                await postUserEvent({
                    name: name,
                    position: position,
                    email: email,
                    phone: phone
                });
            } catch (e) {
                alert('서버에 오류가 발생했습니다.');
            }
            // setLoading(false);
            localStorage.setItem('token', true);
            dispatch(modalClose());
            history.push(Paths.exhibition + '/' + viewId);
        }

    }, [name, position, email, phone, dispatch, history, formCheck, emailForm, phoneForm, viewId]);

    const nextTime = useCallback(() => {
        dispatch(modalClose());
        history.push(Paths.exhibition + '/' + viewId);
    }, [dispatch, history, viewId]);

    return (
        <>
            <div className="modal ">
                {/* event1 */}
                {first &&
                    <div className="eventin">
                        <h3><strong>이벤트 참여 후</strong>전시관 둘러보기</h3>
                        <span>행사 종료 후 추첨을 통하여 경품을 지급해 드립니다.</span>
                        <p><img src={require("../static/img/img_eventin.png")} alt="" /></p>
                        <Link to="#" className="btin" onClick={secondOpen}>참여하기</Link>
                        <Link to="#" className="btclose" onClick={nextTime}>다음에</Link>
                    </div>
                }
                {/* event2 */}
                {second &&
                    <div className="eventtxt">
                        {language === 'ko' ? <h3 style={{ fontWeight: 'bold' }}>이벤트 참여를 위한 회원정보 입력</h3>
                            : <><h3>Entering member information</h3><p /><div>to participate in the event</div></>}
                        <span className="inf">{language === 'ko' ? "*는 필수 입력 항목 입니다." : "*"}</span>
                        <dl className="fir">
                            <dt>{language === 'ko' ? "이름" : "Name"}</dt>
                            <dd>
                                <input
                                    type="text"
                                    placeholder={language === 'ko' ? "영문, 숫자, _ 만 입력 가능, 최소 3자 이상" : "Only English, numbers, and_can be entered, at least 3 characters"}
                                    style={{ width: '100%' }}
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                />
                            </dd>
                        </dl>
                        <dl>
                            <dt>{language === 'ko' ? "소속" : "Organization"} </dt>
                            <dd><input type="text" style={{ width: '100%' }} name="position" value={position} onChange={onChange} /></dd>
                        </dl>
                        <dl>
                            <dt>{language === 'ko' ? "직함" : "Title"}</dt>
                            <dd><input type="text" style={{ width: '100%' }} name="title" value={title} onChange={onChange} /></dd>
                        </dl>
                        <dl>
                            <dt>{language === 'ko' ? "휴대폰 번호" : "Mobile"} </dt>
                            <dd><input type="text" style={{ width: '100%' }} name="phone" value={phone} onChange={onChange} /></dd>
                        </dl>
                        <dl>
                            <dt>{language === 'ko' ? "전화 번호" : "Phone"} </dt>
                            <dd><input type="text" style={{ width: '100%' }} name="tel" value={tel} onChange={onChange} /></dd>
                        </dl>
                        <dl>
                            <dt>{language === 'ko' ? "이메일 주소" : "e-mail"} </dt>
                            <dd>
                                <input type="text" style={{ width: '100%' }} name="email" value={email} onChange={onChange} />
                                {/* <input type="text" style={{ width: '43%' }} name="frontEmail" value={frontEmail} onChange={onChange} />
                                @
                                <input type="text" style={{ width: '45%' }} name="backEmail" value={backEmail} onChange={onChange} /> */}
                            </dd>
                        </dl>
                        <div className="privacy">
                            <h4>· {language === 'ko' ? "개인정보취급방침" : "Privacy policy"}</h4>
                            <span>
                                <strong>{language === 'ko' ? "개인정보취급방침" : "Privacy policy"}</strong>

                                    ㈜이노윙(이하 “회사”)는 정보통신망 이용촉진 및 정보보호에 관한 법률, 개인정보보호법에 따라
                                    모든 고객님의 개인정보보호 및 권익을 보호하기 위하여 수집, 보유된 정보를 적법하고 적정하게 취급할 것입니다.

                                    "회사"는 개인정보와 관련한 고객님의 고충을 원활하게 처리할 수 있도록 관련 법령에 의거한
                                    개인정보 취급방침을 정하여 "회사"의 서비스를 이용하는 고객님의 권익보호에 최선을 다하겠습니다.
                                    본 개인정보처리방침은 ㈜이노윙이 제공하는 서비스 이용에 적용되며 다음과 같은 내용을 담고 있습니다.

                                    제12조 (서비스의 이용 신청에 대한 승낙과 거절)
                                </span>
                            <em>
                                <strong>*</strong>{language === 'ko' ? "동의합니다. " : "I agree. "}
                                <input type="checkbox" id="p1" name="" className="leftch" />
                                <label htmlFor="p1"><span></span> </label>
                            </em>
                        </div>
                        <Link to="" className="btin" onClick={inputCheck}>{language === 'ko' ? "응모하기" : "submit"} </Link>
                    </div>
                }
            </div>
            <Backdrop
                className={classes.backdrop}
                open={open}
                onClick={close}
            />
        </>
    )
}

export default OnlineExhibitionEventContainer;