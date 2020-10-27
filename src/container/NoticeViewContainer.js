import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Paths } from '../paths'

import { getShowDocument } from '../api/NoticeAPI'
import Loading from '../components/assets/Loading'
import { dateToYYYYMMDD } from '../lib/formatter'
import { useSelector } from 'react-redux'

export default ({ viewId, near }) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [noticeView, setNoticeView] = useState({})

    const language = useSelector(state => state.language.current);

    const callNoticeView = useCallback(async () => {
        setLoading(true);
        // api 요청할 때는 로딩 중이 필요하다
        try {
            const res = await getShowDocument(viewId);
            console.log(res);
            if (res) {
                setNoticeView(res);
            }
        } catch (e) {
            // 예외처리 해주고
            alert('삭제되거나 없는 게시물입니다.');
            history.goBack();
        }
        setLoading(false);
    }, [viewId, history]);

    useEffect(() => {
        callNoticeView();
        // 코드 이렇게 쓰면 res 에러 검출 못 한다
        // 무조건 try catch 해라
    }, [callNoticeView])
    // useEffect에서 async 잘 안 씀

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: "",
            title: "공지사항",
            list: "목 록",
            prev: "이전글",
            next: "다음글"
        },
        en: {
            css: " language-en",
            title: "Notice",
            list: "List",
            prev: "Prev",
            next: "Next"
        },
        cn: {
            css: " language-cn",
            title: "중국어",
            list: "중국어",
            prev: "중국어",
            next: "중국어"
        },
        jp: {
            css: " language-jp",
            title: "일본어",
            list: "일본어",
            prev: "일본어",
            next: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    return (
        <section id="comm_container" className={current_pack.css}>
            <div className={"tab" + current_pack.css}>
                <ul>
                    <li>
                        <Link to={LANGUAGE_PATH + Paths.notice} className={"on" + current_pack.css}>
                            {current_pack.title}
                        </Link>
                    </li>
                </ul>
            </div>
            {!loading && (
                <div className={"noticeview" + current_pack.css}>
                    <div className={"viewhead" + current_pack.css}>
                        <h3>{noticeView.title}</h3>
                        <ul>
                            <li>{current_pack.title}</li>
                            <li>{dateToYYYYMMDD(noticeView.created_at)}</li>
                            {/* <li>조회수 637</li> */}
                        </ul>
                    </div>
                    <div className={"viewcontent" + current_pack.css}>
                        {noticeView.contents}
                        {/* <strong>「6차산업제주국제박람회 세부운영요령」은 박람회 개최에 필요한 사항으로 숙지하시고, 관련 내용 참고하여
                다음의 사항을 박람회 사무국으로 기한 내에 반드시 제출하여 주시기 바랍니다.</strong><br />
                    <br />
                    <br />
                - 다               음 -<br />
                    <br />
                가. 출품업체 디렉토리(참가업체 요람) 제작원고(국/영문 혼용 제작)<br />
                1) 제출기한 : 2019. 9. 6(금)<br />
                2) 제출사항 : 회사 및 출품제품 홍보 원고, 이미지<br />
                - 원고 : 국문 300자 영문 100단어 내외 작성<br />
                - 이미지 : 회사 및 출품제품을 홍보할 수 있는 사항<br />
                    <br />
                나. 조립식부스 상호간판 신청서(세부운영요령 서식 #2) 및 후면 이미지 파일<br />
                1) 제출기한 : 2019. 9. 4(수)<br />
                2) 제출사항 : 상호간판 신청서 및 부스 벽체 후면 이미지 파일(첨부파일 참조)<br />
                - 조립식부스 상호간판 신청서<br />
                - 후면 이미지 파일 : 사이즈 2,920mm *2,460mm 홍보 이미지<br />
                    <img src={require("../static/img/img_noticeview.png")} /> */}
                        <div className={"file" + current_pack.css}>
                            <Link to="#">
                                <img
                                    src={require('../static/img/ic_download.png')}
                                    alt="download"
                                />
                            </Link>
                            <span>
                                {noticeView.file_1}
                                <em>334kb</em>
                            </span>
                        </div>
                    </div>
                    <div className={"btbox" + current_pack.css}>
                        <Link to={LANGUAGE_PATH + Paths.notice} className={"bk" + current_pack.css}>
                            {current_pack.list}
                        </Link>
                        {near.next && <Link to={LANGUAGE_PATH + Paths.notice + '/' + near.next} className={"wr" + current_pack.css}>
                            {current_pack.next}
                        </Link>}
                        {near.prev && <Link to={LANGUAGE_PATH + Paths.notice + '/' + near.prev} className={"wr" + current_pack.css}>
                            {current_pack.prev}
                        </Link>}
                    </div>
                </div>
            )}
            <Loading open={loading} />
        </section>
    );
}