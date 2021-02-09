import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from '../components/navbar';
import Tracking from './tracking';

import Home from '../pages/home';
import SillaCoche from '../pages/silla-coche';

export default () => (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
        <NavigationBar />
        <Tracking />
        <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/sillitas-bebe-coche/" component={SillaCoche} />

            <Route path="*" component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);