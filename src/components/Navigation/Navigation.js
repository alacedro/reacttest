import React from 'react';
import './Navigation.css';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar collapseOnSelect>
                
                <Navbar.Brand>
                    <NavLink to={'/'} exact >Home</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/server-list'} exact>
                            <NavItem eventkey={1}>
                                Server List
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}

export default navigation;