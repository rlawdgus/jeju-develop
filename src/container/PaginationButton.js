import React, { useCallback } from 'react'

export default ({ noticeList, currentPage, setCurrentPage }) => {

    // const listLength = noticeList.length
    const listLength = 41
    const paging = []

    const paginationButton = (listLength) => {
        let leng = undefined
        if (listLength % 10 === 0) leng = Math.floor(listLength / 10)
        else leng = Math.floor(listLength / 10 + 1)

        for (let i = 0; i < leng; i++) {
            paging.push(i + 1)
        }
    }

    const pageLink = useCallback((page) => {
        if(1 <= page && paging.length >= page) {
            if(page === 0) setCurrentPage(page + 1)
            else if(page === paging.length + 1) setCurrentPage(page - 1)
            else setCurrentPage(page)
        }
        console.log(page)
    }, [paging.length, setCurrentPage])

    return (
        <>
            <li><div onClick={() => pageLink(1)} ><img src={require("../static/img/ic_first.png")} alt="" /></div></li>
            <li><div onClick={() => pageLink(parseInt(currentPage) - 1)} ><img src={require("../static/img/ic_prev.png")} alt="" /></div></li>

            {paginationButton(listLength)}
            {
                paging.map(item =>
                    <li><div onClick={() => pageLink(item)} className={item === currentPage ? "on" : ""} >{item}</div></li>
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