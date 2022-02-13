import { Box, Button, Container, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';

const HeaderPage = (props) => {

    const [toggle, setToggle] = React.useState(false)

    return (
        // <Box width={["75%", "75%"]} margin='auto' p='3' >
        <div className='py-2'>
            <Navbar expand='md' light>
                <Link className="navbar-brand" href='/'>
                    <Box width={["15%", "4%"]} marginX="4">
                        <Image
                            src={require('../assets/logo/logo_full.png')}
                            alt="locavex-logo"
                            layout='responsive'
                        />
                    </Box>
                </Link>
                <NavbarToggler onClick={() => setToggle(!toggle)} />
                <Collapse navbar isOpen={toggle}>
                    <Nav className="me-auto"
                        navbar>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link aria-current="page" href="/">
                                    <a className="nav-link">
                                        Design
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">
                                        Products
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/calculate">
                                    <a className="nav-link">
                                        Estimate Order
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">
                                        About
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                    <NavbarText>
                        <div className="d-flex shadow p-2 rounded">
                            Hi, &nbsp;<Text fontWeight='bold'> Locapeople</Text>
                            {/* <Button m="2" bgColor="#FDA551">Login</Button>
                            <Button m="2" variant="outline">Register</Button> */}
                        </div>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
        // </Box>
    )
}

export default HeaderPage;