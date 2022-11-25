import {
    Center,
    Spacer
}
from "@chakra-ui/react";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../pages/index'


export default function linea1() {
    return (
    <Layout pageId="linea2">
    <Head>
        <title>Linea 1</title>
    </Head>
    <Center  height="700" bg='white.500' border='2px' borderColor='black' width='1330px'>
        
        <box >
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24061.16525358198!2d-73.23897385001462!3d-39.83157661485098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9615ee9ff311985f%3A0xc0a003eae97d725f!2sAv.%20Balmaceda%2C%20Valdivia%2C%20Los%20R%C3%ADos!3m2!1d-39.8073766!2d-73.20918979999999!4m5!1s0x9615ee4bc884f601%3A0xe3444bee10bfd1f!2zSW5nLiBSYcO6bCBTw6FleiBTw6FleiwgVmFsZGl2aWEsIExvcyBSw61vcw!3m2!1d-39.850179!2d-73.2501039!5e0!3m2!1ses-419!2scl!4v1668395023561!5m2!1ses-419!2scl" width="1330" height="700" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </box>
        </Center>

    </Layout>
)
}