import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Paths } from '../paths/index'


import Pagination from './Pagination'
import PaginationButton from './PaginationButton'

export default ({ page, noticeList }) => {
    const language = useSelector(state => state.language.current);

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        ko: {
            title: "공지사항",
            amount: "총",
            amount2: "건의 글이 있습니다.",
            date: "작성일자",
            subject: "제목",
            go: "보기"
        },
        en: {
            title: "Notice",
            amount: "There are a total",
            amount2: "articles",
            date: "Date",
            subject: "Contents",
            go: "View"
        },
        ch: {
            title: "중국어",
            amount: "중국어",
            amount2: "중국어",
            date: "중국어",
            subject: "중국어",
            go: "중국어"
        },
        ja: {
            title: "일본어",
            amount: "일본어",
            amount2: "일본어",
            date: "일본어",
            subject: "일본어",
            go: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["ko"]
    //--------------------------------------------------------------------------------------

    return (
        <section id="comm_container">
            <div className="tab">
                <ul>
                    <li><Link to={Paths.notice} className="on">{current_pack.title}</Link></li>
                </ul>
            </div>
            <div className="noticebox">
                <span>{current_pack.amount} <strong>{noticeList.length}</strong> {current_pack.amount2}</span>
                <table>
                    <caption>공지사항 내용을 보여주는 표</caption>
                    <colgroup>
                        <col style={{ width: "15%" }} />
                        <col />
                        <col style={{ width: "15%" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">{current_pack.date}</th>
                            <th scope="col">{current_pack.subject}</th>
                            <th scope="col">{current_pack.go}</th>
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