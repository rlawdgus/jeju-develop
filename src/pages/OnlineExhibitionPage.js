import React, { useState } from 'react';
import OnlineExhibitionContainer from '../container/OnlineExhibitionContainer';
import OnlineExhibitionListContainer from '../container/OnlineExhibitionListContainer';

const OnlineExhibitionPage = ({ match }) => {
    // console.log(match)
    const { index } = match.params;
    const viewId = parseInt(index);
    const [type, setType] = useState(1);
    return (
        <>
            {!isNaN(viewId) ? <OnlineExhibitionContainer viewId={viewId} type={type} setType={setType} />
                : <OnlineExhibitionListContainer type={type} setType={setType} />}

        </>
    );
};

export default OnlineExhibitionPage;
