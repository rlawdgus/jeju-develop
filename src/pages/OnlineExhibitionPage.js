import React from 'react';
import OnlineExhibitionContainer from '../container/OnlineExhibitionContainer';
import OnlineExhibitionListContainer from '../container/OnlineExhibitionListContainer';

const OnlineExhibitionPage = ({ match }) => {
    const { index } = match.params;
    const viewId = parseInt(index);

    return (
        <>
            {!isNaN(viewId) ? <OnlineExhibitionContainer viewId={viewId} />
                : <OnlineExhibitionListContainer />}

        </>
    );
};

export default OnlineExhibitionPage;
