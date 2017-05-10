/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component{
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

    render(){
        return (
            <Navbar color="faded" light toggleable fixed="bottom">
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="javascript:void(0)">
                    <img style={{width: 70}} src="/logo.png"/>
                    <span>Hello Blockchain</span>
                </NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#section1">What is Blockchain?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#section2">How Blockchain do?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#section3">What Blockchain can do?</NavLink>
                        </NavItem>
                        <NavLink>
                            <NavLink href="#section4">About Me</NavLink>
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}