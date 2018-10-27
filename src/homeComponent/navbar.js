import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';
import './navbar.css';

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
          <div className="navStyle">
            <Navbar style={{padding: '10px'}} color="faded" light expand="lg">
              <NavbarBrand pull-left><img className="imgSize" src="https://pbs.twimg.com/profile_images/935880969470533632/KprX4QLZ_400x400.jpg"/></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/usercontributions">User Contributions</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/announcements">Newsfeed</NavLink>
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