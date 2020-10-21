import React from 'react';
import OnlineExhibitionContainer from '../container/OnlineExhibitionContainer';
import OnlineExhibitionListContainer from '../container/OnlineExhibitionListContainer';

const OnlineExhibitionPage = ({ match }) => {
    const { mode } = match.params;
    
    return (
        <>
            {mode === 'list' ? <OnlineExhibitionListContainer />
            : <OnlineExhibitionContainer />}
             
        </>
    );
};

export default OnlineExhibitionPage;
