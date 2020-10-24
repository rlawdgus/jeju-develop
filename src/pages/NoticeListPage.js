import React, { useState } from 'react'

import NoticeListContainer from '../container/NoticeListContainer'
import NoticeViewContainer from '../container/NoticeViewContainer'

export default ({ match }) => {
    const { mode } = match.params;

    const [viewId, setViewId] = useState()

    return (
        <>
            {mode === 'view' ? <NoticeViewContainer viewId={viewId} />
            : <NoticeListContainer setViewId={setViewId} />}
        </>
    )
}