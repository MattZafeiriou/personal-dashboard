import React from 'react';
import './NavbarApp.css';
import userProfile from '../user.png';
import homeIcon from '../home.png';
import { Nav, Image, Navbar } from 'react-bootstrap';

const NavbarApp = () => {
    let username = '{username}';


    return (
        <div>
            <Navbar>
                <Nav className='me-auto' variant="underline" defaultActiveKey="/home">
                    <Nav.Item>
                        <div className='lProfile'>
                            <Image src={homeIcon} style={{
                                width: '1.8em',
                                height: '1.8em',
                                marginTop: '0.4em',
                                marginRight: '2em'
                            }}/>
                            <div style={{display: 'grid', marginTop: '0.2em'}}>
                                <span>Good evening,<br/>{username}</span>
                            </div>
                        </div>
                    </Nav.Item>
                    <div style={{
                        width: '1px',
                        height: '3em',
                        background: 'rgba(0,0,0,0.1)',
                        marginLeft: '1em',
                        marginRight: '1em'
                    }}/>
                    <Nav.Item>
                        <Nav.Link eventKey="/home">Home</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item style={{
                        marginLeft: 'auto',
                        marginRight: '0px'
                    }}>
                        <div className='rProfile'>
                            <Nav.Link eventKey="/settings">Settings</Nav.Link>

                            <Image src={userProfile} roundedCircle style={{
                                width: '2.5em',
                                height: '2.5em',
                                marginLeft: '1.5em'
                            }}/>
                        </div>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavbarApp;