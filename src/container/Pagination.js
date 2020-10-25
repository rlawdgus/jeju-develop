import React from 'react'
import { Link } from 'react-router-dom'
import { dateToYYYYMMDD } from '../lib/formatter';
import { Paths } from '../paths';

const PAGE_PER_VIEW = 10; // 한 페이지에 10개 보여주겠다.

export default ({ noticeList, currentPage }) => {

    // const currentList = noticeList.slice(currentPage.page * 10 - 10, currentPage.page * 10 - 1)
    // 이것도 수식을 이렇게 하면 중복 숫자 10 제거..
    const currentList = noticeList.slice((currentPage - 1) * PAGE_PER_VIEW, currentPage * PAGE_PER_VIEW)
    return (
        <>
            {currentList.map(item =>
                <tr key={item.id}>
                    <td>{dateToYYYYMMDD(item.created_at)}</td>
                    <td><Link to={Paths.notice + '/' + item.id} >{item.title}</Link></td>
                    <td><Link to={Paths.notice + '/' + item.id} className="go" >바로가기</Link></td>
                </tr>
            )}
        </>
    );
};