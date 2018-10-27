import React from 'react';

import { Navbar, Nav, NavItem, NavLink} from 'reactstrap';
  
class NavigationBar extends React.Component {
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
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/home">Home</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/mission">Mission</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signIn">Sign In</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }
    export default NavigationBar;