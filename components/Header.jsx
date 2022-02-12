import { Box, Button, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderPage = (props) => {

    return (
        // <Box width={["75%", "75%"]} margin='auto' p='3' >
        <div className='py-2'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" href='/'>
                        <Box width={["15%", "4%"]} marginX="4">
                            <Image
                                src={require('../assets/logo/logo_full.png')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/">Design</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">About</Link>
                            </li>
                        </ul>
                        <div className="d-flex shadow p-2 rounded">
                        Hi, &nbsp;<Text fontWeight='bold'> Locapeople</Text>
                            {/* <Button m="2" bgColor="#FDA551">Login</Button>
                            <Button m="2" variant="outline">Register</Button> */}
                        </div>
                    </div>
                </div>
            </nav>

        </div>
        // </Box>
    )
}

export default HeaderPage;