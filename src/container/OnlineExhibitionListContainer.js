import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDocumentList } from '../api/OnlineExhibitionAPI';

import { firstModalOpen } from '../store/modal';

import SwiperContainer from './SwiperContainer'


const OnlineExhibitionListContainer = () => {

    const URL = "http://14.63.174.102:84";

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

    const firstOpen = useCallback(() => dispatch(firstModalOpen()), [dispatch]);

    const [test, setTest] = useState('');
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('');

    const onChange = e => setSearch(e.target.value);

    const listClick = e => setType(parseInt(e.target.value));

    const callGetDocumentList = useCallback(async () => {
        try {
            const res = await getDocumentList(type); // default : 0
            setResult(res);
            setTest(<SwiperContainer dataSet={res[0]} />);
        } catch (e) {
            alert('서버에 오류가 발생했습니다.');
            setTest(<SwiperContainer dataSet={"Error"} />)
        }
    }, [type]);

    const imgError = useCallback((e) => {
        e.target.src = URL + "/data/uploaded/documents-photo_1-882.jpeg?v=1602807638";
    }, []);

    useEffect(() => {
        callGetDocumentList();
    }, [callGetDocumentList]);

    return (
        <>
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
                            <button type="submit"><img src={require("../static/img/ic_search.png")} alt="" /></button>
                        </span>
                    </div>
                    <p><img src={require("../static/img/img_com.png")} alt="" /></p>
                </div>
                <div className="right_section">
                    <div className="content">
                        <div className="subtop menu01">
                            <h3>{language === 'ko' ? <><strong>{leftLists[type].ko_text}</strong>관 </> : <strong>{leftLists[type].en_text}</strong>}</h3>
                        </div>
                        {test}
                        <div className="bigimg">
                            <ul>
                                {result.map(res => (
                                    <li key={res.id}>
                                        <em>{res.title}</em>
                                        <img className="bigimgsize" src={URL + res.photo_1} onError={imgError} onClick={firstOpen} alt="" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineExhibitionListContainer;