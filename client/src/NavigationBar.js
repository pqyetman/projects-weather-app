import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Umbrella } from 'react-bootstrap-icons'


function NavigationBar() {


    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="px-3 bg-dark text-white bg-opacity-50">
            <Navbar.Brand href="/">
                <Umbrella size={35} className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Today's Forcast</Nav.Link>
                    <Nav.Link href="/futureforcast">Future Forcast</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled href="/historicalforcast">Historical Data</Nav.Link>               
                </Nav>               
            </Navbar.Collapse>
        </Navbar>
    );


}

export default NavigationBar;