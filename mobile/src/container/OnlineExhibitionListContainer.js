import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Loading from '../components/assets/Loading';

import { useHistory } from 'react-router-dom';
import { Paths } from '../paths';


const OnlineExhibitionListContainer = ({ type, items, loading, swiper, firstOpen }) => {
    const URL = "http://14.63.174.102:84";
    const history = useHistory();
    const language = useSelector(state => state.language.current);
    const inputRef = useRef();                // 검색 기능 구현시 필요
    const autoClick = useRef()

    const leftLists = [
        {
            num: 0,
            id: "c1",
            kr_text: "온라인 전시",
            en_text: "Online-Exhibition",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 1,
            id: "c8",
            kr_text: "음료,차류",
            en_text: "Beverages/Tea",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 2,
            id: "c6",
            kr_text: "전통식품",
            en_text: "Traditional Foods",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 3,
            id: "c2",
            kr_text: "가공식품",
            en_text: "Processed Foods",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 4,
            id: "c4",
            kr_text: "건강식품",
            en_text: "Healthy Foods & supplements",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 5,
            id: "c7",
            kr_text: "주류",
            en_text: "Alcoholic drinks",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 6,
            id: "c3",
            kr_text: "간식",
            en_text: "Snacks",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 7,
            id: "c10",
            kr_text: "화장품",
            en_text: "Cosmetics",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 8,
            id: "c11",
            kr_text: "유제품",
            en_text: "Dairy products",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 9,
            id: "c9",
            kr_text: "천연염색",
            en_text: "Dyed products",
            cn_text: "중국어",
            jp_text: "일본어"
        },
        {
            num: 10,
            id: "c5",
            kr_text: "마을공동체",
            en_text: "Local community",
            cn_text: "중국어",
            jp_text: "일본어"
        }
    ]

    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('');                // 검색 기능 구현시 필요
    const [find, setFind] = useState([]);
    const [exist, setExist] = useState(false);

    const onChangeSearch = e => setSearch(e.target.value);         // 검색 기능 구현시 필요

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    const listClick = (num) => {
        history.push(LANGUAGE_PATH + Paths.exhibition + '?type=' + parseInt(num));
        setFind([]); setSearch(''); setExist(false); autoClick.current.click();
    };

    const imgError = useCallback((e) => {
        e.target.src = URL + "/data/uploaded/documents-photo_1-882.jpeg?v=1602807638";
    }, []);

    const findList = useCallback(() => {                 // 검색 기능 구현시 필요
        // 아무것도 입력 없이 찾기버튼을 눌렀을 때
        if (search === '') setExist(false);
        // 입력이 있을경우 언어별로 판단
        if (language === 'en') {
            const findItem = items.filter(item => item.title_en.toLowerCase().indexOf(search.toLowerCase()) > -1)
            if (findItem.length === 0) { alert("The booth does not exist."); setFind([]); setSearch(''); setExist(false); inputRef.current.focus(); }
            else { setExist(true); setFind(findItem); }
        } else if (language === 'cn') {
            const findItem = items.filter(item => item.title.indexOf(search) > -1)
            if (findItem.length === 0) { alert("중국어"); setFind([]); setSearch(''); setExist(false); inputRef.current.focus(); }
            else { setExist(true); setFind(findItem); }
        } else if (language === 'jp') {
            const findItem = items.filter(item => item.title.indexOf(search) > -1)
            if (findItem.length === 0) { alert("일본어"); setFind([]); setSearch(''); setExist(false); inputRef.current.focus(); }
            else { setExist(true); setFind(findItem); }
        } else {
            const findItem = items.filter(item => item.title.indexOf(search) > -1)
            if (findItem.length === 0) { alert("검색하신 부스가 존재하지 않습니다."); setFind([]); setSearch(''); setExist(false); inputRef.current.focus(); }
            else { setExist(true); setFind(findItem); }
        }
    }, [search, items, language])

    const handleKeyPrress = e => {           // 검색 기능 구현시 필요
        if (e.key === 'Enter') {
            findList();
        }
    }

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: "",
            title: "온라인전시관",
            unit: "관",
            search: "부스명 검색"
        },
        en: {
            css: " language-en",
            title: "Online Exhibition",
            unit: "",
            search: "Booth name search"
        },
        cn: {
            css: " language-cn",
            title: "중국어",
            unit: "중국어",
            search: "중국어"
        },
        jp: {
            css: " language-jp",
            title: "일본어",
            unit: "일본어",
            search: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    
        function ChangeBrToBr(props) {
        console.log(props.name_ko,props.name_en)
        let title = (language === 'en' ? props.name_en : props.name_ko)
        console.log(title.split('<br>').length,title.split('<br>'))
        if(title.split('<br>').length == 1){
            console.log('return title')
            return title
        }else{
            var return_title = ''
            console.log('return title to br')
            return_title = title.split('<br>').map( line => { //국영문 구분법
                return (<span>{line}<br/></span>)
            })
            return return_title
        }
    }
    
    //--------------------------------------------------------------------------------------

    useEffect(() => {
        if (!loading) {
            if (type === 0) { setResult([]); setResult(items); }
            else if (type === 8) {
                setResult([]); setResult(items.filter(item => item.type === 10));
            } else if (type === 9) {
                setResult([]); setResult(items.filter(item => item.type === 8));
            } else if (type === 10) {
                setResult([]); setResult(items.filter(item => item.type === 9));
            } else { setResult([]); setResult(items.filter(item => item.type === type)); }
        }
    }, [loading, type, items]);

    const [searchOn, setSearchOn] = useState(false);
    const searchClass = searchOn ? "on" : '';

    return (
        <section id="on_ex_container" className={current_pack.css}>
            <div className={"subnavi" + current_pack.css}>
                <input type="text" className={"search-text " + searchClass} value={search} onChange={onChangeSearch} onKeyPress={handleKeyPrress} ref={inputRef}></input>
                <ul>
                    <li>{current_pack.title}</li>
                    <li>
                        <label htmlFor="touch">
                        {language === 'en' ? <strong>{leftLists[type].en_text}{current_pack.unit}</strong>
                            : language === 'cn' ? <strong>{leftLists[type].cn_text}{current_pack.unit}</strong>
                                : language === 'jp' ? <strong>{leftLists[type].jp_text}{current_pack.unit}</strong>
                                    : <strong>{leftLists[type].kr_text}{current_pack.unit}</strong>}
                        </label>
                        <input type="checkbox" id="touch" ref={autoClick} />
                        <div className={"submenu" + current_pack.css}>
                            {leftLists.map(list => (
                                <div key={list.id} onClick={() => listClick(list.num)} id={list.id} >{language === 'en' ? list.en_text : language === 'cn' ? list.cn_text : language === 'jp' ? list.jp_text : list.kr_text}</div>
                            ))}
                        </div>
                    </li>
                </ul>
                <span>
                    <button type="submit">
                        <img src={(`${process.env.PUBLIC_URL}/img/ic_mo_search.png`)} onClick={() => setSearchOn(!searchOn)} alt="" />
                    </button>
                </span>
            </div>

            <div className={"content" + current_pack.css}>
                <div className={"subtop menu01" + current_pack.css + " type" + type}>
                    <h3>{language === 'en' ? <strong>{leftLists[type].en_text}{current_pack.unit}</strong>
                        : language === 'cn' ? <strong>{leftLists[type].cn_text}{current_pack.unit}</strong>
                            : language === 'jp' ? <strong>{leftLists[type].jp_text}{current_pack.unit}</strong>
                                : <strong>{leftLists[type].kr_text}{current_pack.unit}</strong>}
                    </h3>
                </div>
                {swiper}
                {!loading &&
                    <div className={"bigimg" + current_pack.css}>
                        <ul>
                            {
                                !exist ?
                                    result.map(res => (
                                        <li key={res.id}>
                                                 <em>
                                                <ChangeBrToBr name_ko={res.title}  name_en={res.title_en} />
                                                </em>
                                            <img className={"bigimgsize" + current_pack.css} src={URL + res.photo_2} onError={imgError} onClick={() => firstOpen(res.id)} alt="" />
                                        </li>
                                    ))
                                    :
                                    find.map(res => (
                                        <li key={res.id}>
                                            <em>
                                                <ChangeBrToBr name_ko={res.title}  name_en={res.title_en} />
                                                </em>
                                            <img className={"bigimgsize" + current_pack.css} src={URL + res.photo_2} onError={imgError} onClick={() => firstOpen(res.id)} alt="" />
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                }
            </div>
            <Loading open={loading} />
        </section>
    )
}

export default OnlineExhibitionListContainer;