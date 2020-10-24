import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Paths } from '../paths/index'

import { getDocumentList } from '../api/NoticeAPI'

import Pagination from './Pagination'
import PaginationButton from './PaginationButton'

export default ({ setViewId }) => {
    const [noticeList, setNoticeList] = useState([])
    useEffect(async () => {
        setNoticeList(await getDocumentList())
    }, [])

    const [currentPage, setCurrentPage] = useState(1)

    const history = useHistory();
    const onClick = useCallback((id) => {
        history.push(Paths.notice + '/view');
        setViewId(id)
    }, [history, currentPage]);

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
                        <Pagination noticeList={noticeList} currentPage={currentPage} onClick={onClick} />
                    </tbody>
                </table>
                <div className="tnavi">
                    <ul>
                        <PaginationButton noticeList={noticeList} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </ul>
                </div>
            </div>
        </section>
    )
}