/**
 * Created by dream on 5/10/2017 AD.
 */
import React from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Modal, ModalHeader,
    ModalBody, ModalFooter, Button
} from 'reactstrap';
import '../landing.css'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isOpen: false,
            modal: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div><Navbar color="faded" light toggleable fixed="bottom">
                <NavbarToggler right onClick={this.toggle}/>
                <NavbarBrand href="/">
                    <img style={{width: 70}} src="/logo.png"/>
                    <span>Hello Blockchain</span>
                </NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="" navbar>
                        <NavItem>
                            <NavLink href="#section1" style={{padding: "16px"}}>What is Blockchain?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#section2" style={{padding: "16px"}}>How Blockchain do?</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#section3" style={{padding: "16px"}}>What Blockchain can do?</NavLink>
                        </NavItem>
                        <NavLink>
                            <NavLink href="#section4">About Me</NavLink>
                        </NavLink>
                        <NavLink>
                            <NavLink onClick={this.toggleModal} href="#">Reference</NavLink>
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Reference</ModalHeader>
                    <ModalBody>
                        <div >
                            <h3 className="text-center"> All Document, Picture And Video </h3>
                            <h4 className="text-center">Come From</h4>
                            <ul>
                                <li>
                                    <a href="http://www.blockchain.fish/">
                                        Blockchain Fish
                                    </a>
                                </li>
                                <li>
                                    <a href="https://techsauce.co/technology/blockchain/understand-blockchain-in-5-minutes/">
                                        Techsauce
                                    </a>
                                </li>
                                <li>
                                    <a href="https://nuuneoi.com/blog/blog.php?read_id=900">
                                        NuuNeoI
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=BdN_-EyB224">Youtube</a>
                                </li>
                                <li>
                                    <a href="http://thaipublica.org/2016/07/blockchain-revolution/">Thaipublica</a>
                                </li>
                                <li>
                                    <a href="http://www.playersmoney.com/wp-content/uploads/2016/02/blockchain.jpg">
                                        Playersmoney
                                    </a>
                                </li>
                                <li>
                                    <a href="http://siamblockchain.com/2016/12/29/startup-uses-blockchain-crackdown-wine-fraud/">
                                        siamblockchain
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}