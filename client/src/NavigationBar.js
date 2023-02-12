import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Umbrella } from 'react-bootstrap-icons'
import {LinkContainer} from 'react-router-bootstrap'


function NavigationBar() {


    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="px-3 bg-dark text-white bg-opacity-50">
            <LinkContainer to="/">
            <Navbar.Brand >
                <Umbrella size={35} className="d-inline-block align-top"/>
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <LinkContainer to="/home">
                    <Nav.Link >Today's Forcast</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/futureforcast">
                    <Nav.Link >Future Forcast</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/historicalforcast">
                    <Nav.Link eventKey="disabled" disabled >Historical Data</Nav.Link>  
                    </LinkContainer>             
                </Nav>               
            </Navbar.Collapse>
        </Navbar>
    );


}

export default NavigationBar;