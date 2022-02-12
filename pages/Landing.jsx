import { Box, Button, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import HeaderPage from '../components/Header';
import styles from '../styles/Landing.module.css';
import { FaInstagram, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
import Portfolio from '../components/Portfolio';
import FooterPage from '../components/Footer';
import HeadTag from '../components/headTag';
import preview from '../assets/preview.png'
const LandingPage = (props) => {
    return (
        // <Container maxW='container.xl'>
        <div className={styles.bgsection}>
            <HeadTag
                title="Locavex"
                description="All About Locavex"
                // image="https://ibb.co/fvw4CWK"
                image="https://i.ibb.co/rsr4ZhL/preview.png"
                url='http://localhost:3000/'
            />
            <div className='container'>
                <HeaderPage />
                <div id='section-1' className='row'>
                    <div className='col-12 col-md-6 px-4 py-4 py-md-5'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Text fontSize='2xl' color='gray' w='max-content'>Clothing Production</Text>
                            <span style={{ border: "2px solid #FDA551", width: "60%", height: "1px" }} />
                        </div>
                        <div className='d-flex align-items-center scrollcontainer' style={{ fontFamily: "'Bebas Neue', cursive" }}>
                            <div className={styles.scrollcontainer} >
                                <Box className={styles.scrolltext} maxHeight={["10vh", "18.5vh"]}>
                                    <Text fontSize={{ base: '5xl', lg: '8xl' }} color='#465257' fontWeight='bold'>
                                        Kaos
                                    </Text>
                                    <Text fontSize={{ base: '5xl', lg: '8xl' }} color='#465257' fontWeight='bold'>
                                        Sablon
                                    </Text>
                                </Box>
                            </div>
                            <Text fontSize={{ base: '5xl', lg: '8xl' }} color='#FDA551' textShadow='2px 1px #465257' >
                                Custom
                            </Text>
                        </div>
                        <Text className='d-none d-md-block' borderLeft="4px solid #465257" p='2'>
                            Locavex merupakan produsen pakaian yang bermitra dengan penjahit lokal sekitar dan pekerja sablon.
                            Untuk sat ini kami lebih berfokus ke produksi kaos polos dan menerima pemesanan sablon custom.
                        </Text>
                        <div className='my-4 d-flex justify-content-center flex-wrap'>
                            <a href='https://wa.link/h28uow' target="_blank">
                                <Button boxShadow='xl' type='button' variant='ghost' colorScheme='whatsapp' >
                                    Tanya Admin <FaWhatsapp className='mx-2' />
                                </Button>
                            </a>
                            <a href='https://www.instagram.com/locavex_id/' target="_blank">
                                <Button boxShadow='xl' type='button' variant='ghost' colorScheme='facebook' >
                                    Instagram  <FaInstagram className='mx-2' />
                                </Button>
                            </a>
                            <a href='https://www.tokopedia.com/locavex' target="_blank">
                                <Button boxShadow='xl' type='button' variant='ghost' colorScheme='whatsapp' >
                                    Tokopedia <Box width="1.2em" marginX="2">
                                        <Image
                                            src={require('../assets/logo/tokped.png')}
                                            alt="locavex-logo"
                                            layout='responsive'
                                        />
                                    </Box>
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex'>
                        <Box boxShadow='2xl' width={["50%", "50%"]} marginX="4">
                            <Image
                                src={require('../assets/photo/model-1.jpg')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                        <Box boxShadow='2xl' width={["50%", "50%"]} marginX="4">
                            <Image
                                src={require('../assets/photo/model-2.jpg')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                    </div>
                </div>
            </div>
            <div className='my-5' style={{ backgroundColor: "#465257" }}>
                <div id='section-2' className='container'>
                    <div className='row'>
                        <div className='card col-md-6 p-2 bg-transparent'>
                            <div className='card-body d-flex align-items-center'>
                                <Box width={["50%", "50%"]} marginX="4">
                                    <Image
                                        src={require('../assets/photo/content-polos.png')}
                                        alt="locavex-logo"
                                        layout='responsive'
                                    />
                                </Box>
                                <div >
                                    <Text fontFamily="'Bebas Neue', cursive" fontSize='6xl' color='white'>Kaos</Text>
                                    <hr />
                                    <Text className='text-muted' fontSize='xl'>Detail Soon</Text>
                                </div>
                            </div>
                        </div>
                        <div className='card col-md-6 p-2 bg-transparent'>
                            <div className='card-body d-flex align-items-center'>
                                <Box width={["50%", "50%"]} marginX="4">
                                    <Image
                                        src={require('../assets/photo/content-sablon.png')}
                                        alt="locavex-logo"
                                        layout='responsive'
                                    />
                                </Box>
                                <div >
                                    <Text fontFamily="'Bebas Neue', cursive" fontSize='6xl' color='white'>Sablon</Text>
                                    <hr />
                                    <Text className='text-muted' fontSize='xl'>Detail Soon</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <Portfolio />
            </div>
            <div className='my-5' style={{ backgroundColor: "rgba(253, 165, 81,0.6)" }}>
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-center align-items-center' style={{ fontFamily: "'Bebas Neue', cursive" }}>
                                <Text fontSize={{ base: '5xl', lg: '9xl' }} color='#465257' fontWeight='bold'>
                                    FIND
                                </Text>
                                <Text fontSize={{ base: '5xl', lg: '9xl' }} color='#FDA551' textShadow='2px 1px #465257' >
                                    ME
                                </Text>
                                <Text mx='4' fontSize={{ base: '5xl', lg: '9xl' }} color='#465257' fontWeight='bold'>
                                    <FaLocationArrow />
                                </Text>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <iframe className='shadow' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.17067286635!2d112.18656751525893!3d-7.221364672914585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7821b1698288e7%3A0xeed40de92230ce51!2sLocavex%20Indonesia!5e0!3m2!1sid!2sid!4v1644641592072!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPage />
        </div>
        // </Container>
    )
}

export default LandingPage;