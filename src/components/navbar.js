import { Link } from 'react-router-dom';
import { Nav } from '../styled';
export default () => <Nav>
    <ul>
        <li><Link to="/">Sillas de paseo</Link></li>
        <li><Link to="/sillitas-bebe-coche/">Sillitas de coche</Link></li>
    </ul>
</Nav>