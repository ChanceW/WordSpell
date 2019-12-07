import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
      return (
          <Navbar inverse fixedTop fluid collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to={'/'}>WordSpeller</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <LinkContainer to={'/'} exact>
                          <NavItem>
                              <Glyphicon glyph='education' /> Site Words
              </NavItem>
                      </LinkContainer>
                      <LinkContainer to={'/SiteWordGame'} exact>
                          <NavItem>
                              <Glyphicon glyph='glyphicon glyphicon-knight' /> Site Word Game
              </NavItem>
                      </LinkContainer>
                      <LinkContainer to={'/NumberBoard'} exact>
                          <NavItem>
                              <Glyphicon glyph='glyphicon glyphicon-calendar' /> NumberBoard
              </NavItem>
                      </LinkContainer>
                      <LinkContainer to={'/Shapes'} exact>
                          <NavItem>
                              <Glyphicon glyph='glyphicon glyphicon-object-align-right' /> Shapes
              </NavItem>
                      </LinkContainer>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      );
  }
}
