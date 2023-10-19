import React from 'react';
import './NavbarApp.css';
import { Navbar, Nav, Container, Offcanvas, Form, InputGroup, Button } from 'react-bootstrap';

const NavbarApp = () => {
    const navStyle = {
    }

    return (
        <div style={navStyle}>
            <Nav variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default NavbarApp;