import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDocumentList } from '../api/OnlineExhibitionAPI';

import Loading from '../components/assets/Loading';

import { firstModalOpen } from '../store/modal';
import { setID } from '../store/exhibition';

import SwiperContainer from './SwiperContainer'
import { useHistory } from 'react-router-dom';
import { Paths } from '../paths';


const OnlineExhibitionListContainer = () => {

    const URL = "http://14.63.174.102:84";
    const history = useHistory();
    const language = useSelector(state => state.language.current);

    const leftLists = [
        {
            num: 0,
            ko_text: "온라인 전시",
            en_text: "Online-Exhibition"
        },
        {
            num: 1,
            id: "c8",
            ko_text: "음료,차류",
            en_text: "Beverages/Tea"
        },
        {
            num: 2,
            id: "c6",
            ko_text: "전통식품",
            en_text: "Traditional Foods"
        },
        {
            num: 3,
            id: "c2",
            ko_text: "가공식품",
            en_text: "Processed Foods"
        },
        {
            num: 4,
            id: "c4",
            ko_text: "건강식품",
            en_text: "Healthy Foods & supplements"
        },
        {
            num: 5,
            id: "c7",
            ko_text: "주류",
            en_text: "Alcoholic drinks"
        },
        {
            num: 6,
            id: "c3",
            ko_text: "간식",
            en_text: "Snacks"
        },
        {
            num: 7,
            id: "c10",
            ko_text: "화장품",
            en_text: "Cosmetics"
        },
        {
            num: 8,
            id: "c9",
            ko_text: "천연염색",
            en_text: "Dyed products"
        },
        {
            num: 9,
            id: "c5",
            ko_text: "마을공동체",
            en_text: "Local community"
        }
    ]

    const [type, setType] = useState(0);
    const dispatch = useDispatch();

    const firstOpen = useCallback((id) => {
        const TOKEN = localStorage.getItem('token');
        if (TOKEN) {
            history.push(Paths.exhibition + '/list');
        } else {
            dispatch(setID(id));
            dispatch(firstModalOpen());
        }
    }, [dispatch, history]);

    const [swiper, setSwiper] = useState('');
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('');
    const [find, setFind] = useState([]);
    const [loading, setLoading] = useState(false);

    const onChange = e => setSearch(e.target.value);

    const listClick = e => { setType(parseInt(e.target.value)); setFind([]); };

    const callGetDocumentList = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getDocumentList(type); // default : 0
            setResult(res);
            setSwiper(<SwiperContainer dataSet={res} />);
        } catch (e) {
            alert('서버에 오류가 발생했습니다.');
            setSwiper(<SwiperContainer dataSet={"Error"} />)
        }
        setLoading(false);
    }, [type]);

    const imgError = useCallback((e) => {
        e.target.src = URL + "/data/uploaded/documents-photo_1-882.jpeg?v=1602807638";
    }, []);

    const findList = useCallback(() => {
        const findItem = result.filter(item => item.title === search);
        if (findItem.length !== 0) {
            setFind(findItem)
        } else {
            alert("검색하신 부스가 존재하지 않습니다.");
            setFind([]);
            setSearch('');
        }
    }, [search, result])

    useEffect(() => {
        try {
            callGetDocumentList();
        } catch (e) {
            alert('서버에 오류가 발생했습니다.');
        }
    }, [callGetDocumentList]);

    return (
        <section id="on_ex_container">
            <div className="left_section">
                <h2>
                    <input type="checkbox" id="c1" name="" className="leftch" value={0} onClick={listClick} checked={type === 0} readOnly />
                    <label htmlFor="c1"><span></span>{language === 'ko' ? "온라인 전시관" : "Online-Exhibition"}</label>
                </h2>
                <ul>
                    {leftLists.map(list => (
                        list.num !== 0 &&
                        <li key={list.id}>
                            <input type="checkbox" id={list.id} name="" className="leftch" value={list.num} onClick={listClick} checked={type === list.num} readOnly />
                            <label htmlFor={list.id}><span></span>{language === 'ko' ? list.ko_text : list.en_text}</label>
                        </li>
                    ))}
                </ul>
                <div className="search">
                    <h3>{language === 'ko' ? "부스명 검색" : "Booth name search"}</h3>
                    <span>
                        <input type="text" value={search} onChange={onChange} />
                        <button type="submit"><img src={require("../static/img/ic_search.png")} alt="" onClick={findList} /></button>
                    </span>
                </div>
                <p><img src={require("../static/img/img_com.png")} alt="" /></p>
            </div>
            {!loading &&
                <div className="right_section">
                    <div className="content">
                        <div className="subtop menu01">
                            <h3>{language === 'ko' ? <><strong>{leftLists[type].ko_text}</strong>관 </> : <strong>{leftLists[type].en_text}</strong>}</h3>
                        </div>
                        {swiper}
                        <div className="bigimg">
                            <ul>
                                {
                                    find.length === 0
                                        ? result.map(res => (
                                            <li key={res.id}>
                                                <em>{res.title}</em>
                                                <img className="bigimgsize" src={URL + res.photo_1} onError={imgError} onClick={() => firstOpen(res.id)} alt="" />
                                            </li>
                                        ))
                                        : <li>
                                            <em>{find[0].title}</em>
                                            <img className="bigimgsize" src={URL + find[0].photo_1} onError={imgError} onClick={firstOpen} alt="" />
                                        </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
            <Loading open={loading} />
        </section>
    )
}

export default OnlineExhibitionListContainer;