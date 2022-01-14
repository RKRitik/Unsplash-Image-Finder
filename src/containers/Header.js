import { useState } from "react";
import { Menu } from "antd";
import {
  Nav,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarText,
  Navbar
} from "reactstrap";
import { HomeFilled , ProfileFilled } from "@ant-design/icons/lib/icons";
const Navigation = () => {
    const [state,setState]=useState('home')
    const  handleClick = e => {
      console.log('click ', e);
      setState(e.key);
    };
  
    return (
     
      <div>
      <Navbar
        color="dark"
        expand="md"
        fixed="top"
      >
        <NavbarBrand href="/home">
          Images Demo
        </NavbarBrand>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/home/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">
                Profile
              </NavLink>
            </NavItem>
            
          </Nav>
          
     
      </Navbar>
    </div>
        
    
      )
  };


  export default Navigation;