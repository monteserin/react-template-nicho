import Link from 'next/link';
import { Nav } from '../application/styled';
export default () => <Nav>
    <ul>
        <li><Link href="/">Sillas de paseo</Link></li>
        <li><Link href="/sillitas-bebe-coche/">Sillitas de coche</Link></li>
    </ul>
</Nav>