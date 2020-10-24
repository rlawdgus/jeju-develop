import React from 'react'
import { Link } from 'react-router-dom'

export default ({ noticeList, currentPage, onClick }) => {

    const currentList = noticeList.slice(currentPage.page * 10 - 10, currentPage.page * 10 - 1)

    return (
        <>
            {
                currentList.map(item =>
                    <tr>
                        <td>{item.created_at}</td>
                        <td><Link onClick={() => onClick(item.id)} >{item.title}</Link></td>
                        <td><Link onClick={() => onClick(item.id)} className="go" >바로가기</Link></td>
                    </tr>
                )
            }
        </>
    )
}