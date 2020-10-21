import React from 'react';
import OnlineExhibitionContainer from '../container/OnlineExhibitionContainer';

const OnlineExhibitionPage = ({ match }) => {
    const { mode } = match.params;
    
    return <OnlineExhibitionContainer mode={mode} />;
};

export default OnlineExhibitionPage;
