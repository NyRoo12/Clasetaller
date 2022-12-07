import {
    Center,
    Spacer
}
from "@chakra-ui/react";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../pages/index'


export default function linea3() {
    return (
    <Layout pageId="linea3">
    <Head>
        <title>Linea 3</title>
    </Head>
    <Center  height="700" bg='white.500' border='2px' borderColor='black' width='1481px'>
        
        <box >
            <iframe src="https://www.google.com/maps/d/embed?mid=1Rt4YNRhq0ZoFHjdhy9mTklGKg_lhrsQ&ehbc=2E312F" width="1481" height="700"  allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </box>
        </Center>

    </Layout>
)
}