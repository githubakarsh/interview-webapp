import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecordPagination from '../pages/RecordsPagination';
import DefaultPage from '../pages/Default';

const AppRouter = () => {
    return <Switch>
        <Route path="/" exact component={DefaultPage}/>
        <Route path="/records"component={RecordPagination}/>
    </Switch>
}

export default AppRouter;
