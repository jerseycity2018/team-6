import React from 'react';

import { Navbar, Nav, NavItem, NavLink} from 'reactstrap';
  
  export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="/home">Home</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavItem eventKey={1} href="/mission">
                    Mission
                </NavItem>
                <NavItem eventKey={2} href="#">
                    someOtherStuff
                </NavItem>
                </Nav>
                <Nav pullRight>
                <NavItem eventKey={1} href="/signInPage">
                    Link Right
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
      );
  }
}