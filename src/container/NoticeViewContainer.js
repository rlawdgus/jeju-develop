import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Paths } from '../paths'

import { getShowDocument } from '../api/NoticeAPI'
import Loading from '../components/assets/Loading'
import { dateToYYYYMMDD } from '../lib/formatter'
import { useSelector } from 'react-redux'

export default ({ viewId, near }) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [noticeView, setNoticeView] = useState({})

    const language = useSelector(state => state.language.current);

    const callNoticeView = useCallback(async () => {
        setLoading(true);
        // api 요청할 때는 로딩 중이 필요하다
        try {
            const res = await getShowDocument(viewId);
            if (res) {
                setNoticeView(res);
            }
        } catch (e) {
            // 예외처리 해주고
            alert('삭제되거나 없는 게시물입니다.');
            history.goBack();
        }
        setLoading(false);
    }, [viewId, history]);

    useEffect(() => {
        callNoticeView();
        // 코드 이렇게 쓰면 res 에러 검출 못 한다
        // 무조건 try catch 해라
    }, [callNoticeView])
    // useEffect에서 async 잘 안 씀

    const LANGUAGE_PATH = language !== '' ? `/${language}` : '';

    //--------------------------------------------------------------------------------------
    const LANGUAGE_PACK = {
        kr: {
            css: "",
            title: "공지사항",
            list: "목 록",
            prev: "이전글",
            next: "다음글"
        },
        en: {
            css: " language-en",
            title: "Notice",
            list: "List",
            prev: "Prev",
            next: "Next"
        },
        cn: {
            css: " language-cn",
            title: "중국어",
            list: "중국어",
            prev: "중국어",
            next: "중국어"
        },
        jp: {
            css: " language-jp",
            title: "일본어",
            list: "일본어",
            prev: "일본어",
            next: "일본어"
        }
    }

    const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
    //--------------------------------------------------------------------------------------

    return (
        <section id="comm_container" className={current_pack.css}>
            <div className={"subnavi" + current_pack.css}>
                <ul>
                    <li>
                        {current_pack.title}
                    </li>
                </ul>
            </div>
            {!loading && (
                <div className={"noticeview" + current_pack.css}>
                    <div className={"viewhead" + current_pack.css}>
                        <h3>{noticeView.title}</h3>
                        <ul>
                            <li>{current_pack.title}</li>
                            <li>{dateToYYYYMMDD(noticeView.created_at)}</li>
                            <li>조회수 637</li>
                        </ul>
                    </div>
                    <div className={"viewcontent" + current_pack.css}>
                        {noticeView.contents}
                        <div className={"file" + current_pack.css}>
                            {noticeView.file_1 && <a href={URL + noticeView.file_1} download>
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/ic_download.png`}
                                    alt="download"
                                />
                            </a>}
                            <span>
                                {noticeView.file_1}
                                <em>334kb</em>
                            </span>
                        </div>
                    </div>
                    <div className={"btbox" + current_pack.css}>
                        <Link to={LANGUAGE_PATH + Paths.notice} className={"bk" + current_pack.css}>
                            {current_pack.list}
                        </Link>
                        {near.prev && <Link to={LANGUAGE_PATH + Paths.notice + '/' + near.prev} className={"wr" + current_pack.css}>
                            {current_pack.prev}
                        </Link>}
                        {near.next && <Link to={LANGUAGE_PATH + Paths.notice + '/' + near.next} className={"wr" + current_pack.css}>
                            {current_pack.next}
                        </Link>}
                    </div>
                </div>
            )}
            <Loading open={loading} />
        </section>
    );
}