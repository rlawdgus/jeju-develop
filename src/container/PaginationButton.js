import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Paths } from '../paths';

export default ({ noticeList, currentPage }) => {

    const language = useSelector(state => state.language.current);
    const history = useHistory();
    const listLength = noticeList.length
    const paging = []

    const paginationButton = (listLength) => {
        let leng = undefined
        if (listLength % 10 === 0) leng = Math.floor(listLength / 10)
        else leng = Math.floor(listLength / 10 + 1)

        for (let i = 0; i < leng; i++) {
            paging.push(i + 1)
        }
    }

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    const pageLink = useCallback(page => {
        if (page <= 0) history.push(LANGUAGE_PATH + Paths.notice + '?page=1')
        else if (page > paging.length) history.push(LANGUAGE_PATH + Paths.notice + '?page=' + paging.length)
        else history.push(LANGUAGE_PATH + Paths.notice + '?page=' + page)
    }, [paging, history, LANGUAGE_PATH]);

    return (
        <>
            <li><div onClick={() => pageLink(1)} ><img src={require("../static/img/ic_first.png")} alt="" /></div></li>
            <li><div onClick={() => pageLink(parseInt(currentPage) - 1)} ><img src={require("../static/img/ic_prev.png")} alt="" /></div></li>

            {paginationButton(listLength)}
            {
                paging.map(item =>
                    <li key={item} className={item}><div onClick={() => pageLink(item)} className={item === currentPage ? "on" : ""} >{item}</div></li>
                )
            }

            <li><div onClick={() => pageLink(parseInt(currentPage) + 1)} ><img src={require("../static/img/ic_next.png")} alt="" /></div></li>
            <li><div onClick={() => pageLink(paging.length)} ><img src={require("../static/img/ic_end.png")} alt="" /></div></li>



            {/* <li><Link to={path + '1'}><img src={require("../static/img/ic_first.png")} alt="" /></Link></li>
            <li><Link to={path + `${currentPage.page - prev}`}><img src={require("../static/img/ic_prev.png")} alt="" /></Link></li>
            {
                paginationButton(listLength),
                paging.map(item =>
                    <li><Link to={path + item} >{item}</Link></li>
                )

            }
            <li><Link to={path + `${currentPage.page + next}`} ><img src={require("../static/img/ic_next.png")} alt="" /></Link></li>
            <li><Link to={path + `${Math.floor(listLength / 10 + 1)}`} ><img src={require("../static/img/ic_end.png")} alt="" /></Link></li> */}
        </>
    )
}