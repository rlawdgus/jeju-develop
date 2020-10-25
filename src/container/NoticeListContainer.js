import React from 'react'
import { Link } from 'react-router-dom'

import { Paths } from '../paths/index'


import Pagination from './Pagination'
import PaginationButton from './PaginationButton'

export default ({ page, noticeList }) => {
    

    return (
        <section id="comm_container">
            <div className="tab">
                <ul>
                    <li><Link to={Paths.notice} className="on">공지사항</Link></li>
                </ul>
            </div>
            <div className="noticebox">
                <span>총 <strong>{noticeList.length}</strong>건의 글이 있습니다.</span>
                <table>
                    <caption>공지사항 내용을 보여주는 표</caption>
                    <colgroup>
                        <col style={{ width: "15%" }} />
                        <col />
                        <col style={{ width: "15%" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">작성일자</th>
                            <th scope="col">제목</th>
                            <th scope="col">보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Pagination noticeList={noticeList} currentPage={page} />
                    </tbody>
                </table>
                <div className="tnavi">
                    <ul>
                        <PaginationButton noticeList={noticeList} currentPage={page} />
                    </ul>
                </div>
            </div>
        </section>
    )
}