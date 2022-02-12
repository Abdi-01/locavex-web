import { Text, FormControl, FormLabel, Input, RadioGroup, Stack, Radio, InputGroup, InputLeftAddon, Checkbox, Button } from '@chakra-ui/react';
import React from 'react';
import FooterPage from '../components/Footer';
import HeaderPage from '../components/Header';
import HeadTag from '../components/headTag';

const CalculatePage = (props) => {
    const [proType, setProType] = React.useState('1')
    const [matType, setMatType] = React.useState('1')

    const [total, setTotal] = React.useState(0)

    const [sizeList, setSizeList] = React.useState([
        {
            id: 1,
            size: "S",
            qty: [
                { type: "short", amount: "" },
                { type: "long", amount: "" }
            ],
            selected: [false, false],
            price: 36500
        },
        {
            id: 2,
            size: "M",
            qty: [
                { type: "short", amount: "" },
                { type: "long", amount: "" }
            ],
            selected: [false, false],
            price: 36500
        },
        {
            id: 3,
            size: "L",
            qty: [
                { type: "short", amount: "" },
                { type: "long", amount: "" }
            ],
            selected: [false, false],
            price: 36500
        },
        {
            id: 4,
            size: "XL",
            qty: [
                { type: "short", amount: "" },
                { type: "long", amount: "" }
            ],
            selected: [false, false],
            price: 36500
        },
        {
            id: 5,
            size: "2XL",
            qty: [
                { type: "short", amount: "" },
                { type: "long", amount: "" }
            ],
            selected: [false, false],
            price: 45500
        },
        {
            id: 6,
            size: "3XL",
            qty: [
                { type: "short", amount: "" },
                { type: "long", amount: "" }
            ],
            selected: [false, false],
            price: 51500
        },
        {
            id: 7,
            size: "4XL",
            qty: [
                { type: "short", amount: "" },
                { type: "long", amount: "" }
            ],
            selected: [false, false],
            price: 56500
        }
    ])

    const handleCheck = (val, idx, type) => {
        console.log(sizeList)
        if (type == "short") {
            sizeList[idx].selected[0] = !val
        } else {
            sizeList[idx].selected[1] = !val
        }
        setSizeList(sizeList);
    }

    const handleQty = (val, idx, type) => {
        console.log(sizeList)
        if (type == "short") {
            sizeList[idx].qty[0].amount = val.target.value
        } else {
            sizeList[idx].qty[1].amount = val.target.value
        }
        setSizeList(sizeList);
        totalPayment()
    }

    const printSize = (type) => {
        return sizeList.map((val, idx) => {
            return <div className="col-4" style={{ maxWidth: "100%", marginBottom: '1.5%' }}>
                <InputGroup key={val.id} >
                    <InputLeftAddon width='50%'>
                        {/* <Checkbox colorScheme='orange' onChange={() => handleCheck(type == "short" ? val.selected[0] : val.selected[1], idx, type)}
                            checked={type == "short" ? val.selected[0] : val.selected[1]}>
                        </Checkbox> */}
                        {val.size}
                    </InputLeftAddon>
                    <Input placeholder='Qty' onChange={e => handleQty(e, idx, type)} value={type == "short" ? val.qty[0].amount : val.qty[1].amount} />
                </InputGroup>
            </div>
        })
    }

    const totalPayment = () => {
        let total = 0;

        sizeList.forEach(val => {
            if (val.qty[0].amount > 0) {
                total += parseInt(val.qty[0].amount) * val.price
            }
            if (val.qty[1].amount > 0) {
                total += (parseInt(val.qty[1].amount) * val.price) + 9000
            }
        })

        setTotal(total)
    }

    const handleReset = () => {
        setTotal(0)

        let temp = [...sizeList]

        temp.forEach(val => {
            val.qty[0].amount = "";
            val.qty[1].amount = "";
        })

        setSizeList(temp)
    }

    console.log(sizeList)

    return (
        <div>
            <HeadTag
                title="Locavex | Estimasi Harga Order"
                description="All About Locavex"
                // image="https://ibb.co/fvw4CWK"
                image="https://i.ibb.co/rsr4ZhL/preview.png"
                url='https://locavex.vercel.app/'
            />
            <div className='container'>
                <HeaderPage />
                <div className='my-3'>
                    <Text fontSize={{ base: '5xl', lg: '6xl' }} marginY='4' fontWeight='bold'>Estimasi Orderan</Text>
                    <div className='row'>
                        <div className='col-md-6'>
                            <FormControl isRequired marginY='5'>
                                <FormLabel htmlFor='products-type' fontSize='2xl' fontWeight='bold'>Produk</FormLabel>
                                <RadioGroup onChange={setProType} value={proType}>
                                    <Stack direction='row'>
                                        <Radio value='1'>Kaos Polos</Radio>
                                        <Radio value='2' disabled>Kaos Sablon DTF</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                            <FormControl isRequired marginY='5'>
                                <FormLabel htmlFor='material-type' fontSize='2xl' fontWeight='bold'>Jenis Kain</FormLabel>
                                <RadioGroup onChange={setMatType} value={matType}>
                                    <Stack direction='row'>
                                        <Radio value='1'>Cotton Combed 30S</Radio>
                                        <Radio value='2' disabled>Cotton Combed 24S</Radio>
                                        <Radio value='3' disabled>Semi Cotton</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                            <FormControl isRequired marginY='5'>
                                <FormLabel htmlFor='short-type' fontSize='2xl' fontWeight='bold'>Size Lengan Pendek</FormLabel>
                                <div className='row'>
                                    {printSize("short")}
                                </div>
                            </FormControl>
                            <FormControl isRequired marginY='5'>
                                <FormLabel htmlFor='long-type' fontSize='2xl' fontWeight='bold'>Size Lengan Panjang</FormLabel>
                                <div className='row'>
                                    {printSize("long")}
                                </div>
                            </FormControl>
                        </div>
                        <div className='col-md-6'>
                            <Text marginY='5' fontWeight='bold' fontSize='2xl'>Perkiraan Harga Total</Text>
                            <Text marginY='5' fontWeight='bold' fontSize='2xl'>Rp. {total.toLocaleString()},-</Text>
                            <Text marginY='5' fontStyle='italic' color='red.300' >nb : Ini adalah harga perkiraan, dan belum termasuk ongkir. Untuk informasi lebih lanjut hubungi admin.</Text>
                            <Button colorScheme='red' onClick={handleReset} type="button">Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPage />
        </div>
    )
}

export default CalculatePage;