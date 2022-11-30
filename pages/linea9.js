import {
    Center,
    Spacer
}
from "@chakra-ui/react";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../pages/index'


export default function linea9() {
    return (
    <Layout pageId="linea2">
    <Head>
        <title>Linea 9</title>
    </Head>
    
    <Center  height="510" bg='white.500' border='2px' borderColor='black' width='1030px'>
        <box >
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1AiBNs-x9n3HNWhWvHE12fNoEfRdAQR0&ehbc=2E312F" width="1730" height="750" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </box>
        </Center>

    </Layout>
)
}