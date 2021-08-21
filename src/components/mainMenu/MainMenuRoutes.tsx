import React from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Path from '../../common/constants/paths';
import Portal from '../newsPortal/Portal';
import MainMenu from './MainMenu';

type Props = {

}

const MainMenuRoutes: React.FC<Props> = () => <BrowserRouter><Switch>
    <Route exact path={Path.main}><MainMenu /></Route>
    <Route exact path={Path.portal}><Portal /></Route>
</Switch>
</BrowserRouter>

export default MainMenuRoutes;