import React from 'react';
import './Sidebar.css';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;