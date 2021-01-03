import Routes from './application/routes';
import NavigationBar from './components/navbar';
import { GlobalStyle } from './styled';

export default () => <div><GlobalStyle /><NavigationBar /><Routes /></div>;