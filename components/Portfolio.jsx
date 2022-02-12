import { Box, Grid, GridItem, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Portfolio = (props) => {

    return (
        <div className='row'>
            <div className='col-12 col-md-6 order-2 order-md-1'>
                <Grid
                    // h='200px'
                    templateColumns='repeat(3,1fr)'
                    gap={2}
                >
                    <GridItem colSpan={1} rowSpan={2} >
                        <Box boxShadow='2xl'  width="100%">
                            <Image
                                src={require('../assets/photo/model-4.jpg')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2} >
                        <Box boxShadow='xl' width="100%" >
                            <Image
                                src={require('../assets/porto/porto-3.jpg')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} >
                        <Box boxShadow='xl' width="100%" >
                            <Image
                                src={require('../assets/porto/porto-1.jpeg')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} >
                        <Box boxShadow='xl' width="100%" >
                            <Image
                                src={require('../assets/porto/porto-2.jpeg')}
                                alt="locavex-logo"
                                layout='responsive'
                            />
                        </Box>
                    </GridItem>
                </Grid>
            </div>
            <div className='col-12 col-md-6 order-1 order-md-2'>
                <div className='d-flex align-items-center justify-content-between'>
                    <Text fontSize='2xl' color='gray' w='max-content'>Some Portfolio</Text>
                    <span style={{ border: "2px solid #FDA551", width: "70%", height: "1px" }} />
                </div>
                <div className='d-flex align-items-center' style={{ fontFamily: "'Bebas Neue', cursive" }}>
                    <Text fontSize={{ base: '5xl', lg: '9xl' }} color='#465257' fontWeight='bold'>
                        Order
                    </Text>
                    <Text fontSize={{ base: '5xl', lg: '9xl' }} color='#FDA551' textShadow='2px 1px #465257' >
                        Custom
                    </Text>
                </div>
                <Text className='d-none d-md-block' borderLeft="4px solid #465257" p='2'>
                    Kami memproduksi paling cepat selama 7 Hari. Dengan kekuatan produksi dalam seminggu mencapai 60pcs kaos. Dan untuk sablon DTF setidaknya 4-5 hari kerja.
                </Text>
            </div>

        </div>
    )
}

export default Portfolio;