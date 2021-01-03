import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';


export default () => (
    <BrowserRouter>
        <Switch>

            <Route exact path="/" component={Home} />

            <Route path="*" component={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
);