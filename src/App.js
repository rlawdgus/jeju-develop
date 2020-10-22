import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import OnlineExhibitionPage from './pages/OnlineExhibitionPage';
import ConferencePage from './pages/ConferencePage';

import DialogContainer from './container/assets/DialogContainer';
import LoadingContainer from './container/assets/LoadingContainer';
import OnlineExhibitionEventContainer from './container/OnlineExhibitionEventContainer';

import Header from './components/header/Header';

import { getDocumentList } from './api/GetDocumentList'
import { getDocumentList2 } from './api/GetDocumentList2'
import { postUserEvent } from './api/PostUserEvent'
import { showDocument } from './api/ShowDocument'
import { showDocument2 } from './api/ShowDocument2'


import { Paths } from './paths';

import './static/stylesheets/App.css';

const debug = async () => {
    const result = await getDocumentList(1)
    const result2 = await showDocument()
    const result3 = await getDocumentList2()
    const result4 = await showDocument2()
    const result5 = await postUserEvent("name", "position", "email", "phone")

    console.log(result, result2, result3, result4, result5)
}

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path={Paths.index} component={HomePage} exact />
                <Route path={Paths.exhibition + '/:mode?'} component={OnlineExhibitionPage} />
                <Route path={Paths.conference} component={ConferencePage} />
                <Route component={ErrorPage} />
            </Switch>

            <OnlineExhibitionEventContainer />
            {/* ----- 신경 ㄴㄴ ----- */}
            <DialogContainer />
            <LoadingContainer />

            <div onClick={debug}>API TEST</div>
        </>
    );
};

export default App;
