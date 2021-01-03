import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default () => <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Sillas de paseo para bebe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>
        </Nav>

    </Navbar.Collapse>
</Navbar>