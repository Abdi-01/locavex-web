import { Box, Button, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

const FooterPage = (props) => {

    return (
        // <Box width={["75%", "75%"]} margin='auto' p='3' >
        <div className='py-4' style={{ backgroundColor: "#465257" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 '>
                        <Link className="navbar-brand" href="/">
                            <Box width="80%" marginX="4">
                                <Image
                                    src={require('../assets/logo/logo-white-transparent.png')}
                                    alt="locavex-logo"
                                    layout='responsive'
                                />
                            </Box>
                        </Link>
                        <Text fontSize={{ base: 'sm', lg: 'md' }} className='text-muted text-center'>
                           Locavex Indonesia, Dsn.Blumbang Rt02/Rw03, Dradah Blumbang, Kedungpring, Kabupaten Lamongan, Jawa Timur 62272
                        </Text>
                    </div>
                    <div className='col-md-4 d-none d-md-flex justify-content-center align-items-center'>
                        <FaWhatsapp color='white' className='mx-2' fontSize="2em" />
                        <FaInstagram color='white' className='mx-2' fontSize="2em" />
                        <Box width="1.9em" marginX="2" className='mx-2'>
                            <Image
                                src={require('../assets/logo/tokped-white.png')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                    </div>
                    <div className='col-md-4 d-none d-md-block'>
                        <Text fontSize='xl' fontWeight='bold' color='#FDA551'>Contact</Text>
                        <Box borderLeft="4px solid #FDA551" p='2' color='#FDA551'>
                            <span className='d-flex'>
                                <FaMailBulk />&nbsp;<Text>locavexid@gmial.com</Text>
                            </span>
                            <span className='d-flex'>
                                <FaPhone />&nbsp;<Text>+62 822-2868-2118</Text>
                            </span>
                        </Box>
                    </div>
                </div>
                <p className='text-center text-muted my-3'>Copyright &copy; 2021 aldev</p>
            </div>
        </div>
        // </Box>
    )
}

export default FooterPage;