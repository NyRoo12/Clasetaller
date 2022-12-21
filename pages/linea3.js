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
        <title>Linea 1</title>
    </Head>
    <Center  height="700" bg='white.500' border='2px' borderColor='black' width='1630px'>
        
        <box >
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24514.50543720537!2d-73.2512901452076!3d-39.822395484055136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9615eef5ec0267f7%3A0xf01724bd8f41fb70!2sAv.%20Francia%2C%20Valdivia%2C%20Los%20R%C3%ADos!3m2!1d-39.8379073!2d-73.2277606!4m5!1s0x9615eddd95325425%3A0xc96ec6773e9cdb2d!2sUach%20-%20Independencia%2C%20Valdivia!3m2!1d-39.8061639!2d-73.2516591!5e0!3m2!1ses-419!2scl!4v1669333546861!5m2!1ses-419!2scl" width="1630" height="700"  allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </box>
        </Center>

    </Layout>
)
}