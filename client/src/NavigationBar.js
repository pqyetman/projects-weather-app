import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Umbrella } from 'react-bootstrap-icons'


function NavigationBar() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className="px-3">
            <Navbar.Brand href="/">
                <Umbrella size={35} className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Today's Forcast</Nav.Link>
                    <Nav.Link href="/futureforcast">Future Forcast</Nav.Link>
                    <Nav.Link href="/historicalforcast">Historical Data</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        Log Out
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );


}

export default NavigationBar;