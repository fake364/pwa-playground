import React from 'react';
import { Route, Switch, MemoryRouter } from "react-router";
import Path from '../../common/constants/paths';
import MainMenu from './MainMenu';

type Props = {

}

const MainMenuRoutes: React.FC<Props> = () => <MemoryRouter><Switch>
    <Route exact path={Path.main}><MainMenu /></Route>
</Switch>
</MemoryRouter>

export default MainMenuRoutes;