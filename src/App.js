import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import OnlineExhibitionPage from './pages/OnlineExhibitionPage';
import ConferencePage from './pages/ConferencePage';
import WelcomingPage from './pages/WelcomingPage';
import NoticeListPage from './pages/NoticeListPage'

import DialogContainer from './container/assets/DialogContainer';
import LoadingContainer from './container/assets/LoadingContainer';
import OnlineExhibitionEventContainer from './container/OnlineExhibitionEventContainer';

import Header from './components/header/Header'

import { Paths } from './paths';

import './static/stylesheets/App.css';


const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path={Paths.index} component={HomePage} exact />
                <Route path={Paths.exhibition + '/:mode?'} component={OnlineExhibitionPage} />
                <Route path={Paths.conference} component={ConferencePage} />
                <Route path={Paths.session + '/:mode?'} component={WelcomingPage} />
                <Route path={Paths.notice + '/:index?'} component={NoticeListPage} />
                <Route component={ErrorPage} />
            </Switch>

            <OnlineExhibitionEventContainer />
            {/* ----- 신경 ㄴㄴ ----- */}
            <DialogContainer />
            <LoadingContainer />
        </>
    );
};

export default App;
