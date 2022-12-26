
import {
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,

}

<<<<<<< HEAD
from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
=======
    from "@chakra-ui/react";
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
import Link from "next/link";
import React from "react";


const MainContentLayout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (

        <b className="dsc-main-content">

            <div className="main">
                {children}
            </div>

            <a class="btn-flotante" onClick={onOpen}>LINEAS </a>

            <Link href="/EasterEgg">

                <img class="circular--square" src="images/Kasus.gif" >
                </img>

            </Link>


            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />

                    <br></br>
                    <a href="/linea1" class="btn-flotante1" >Linea 1</a>
                    <br></br>
                    <a href="/linea2" class="btn-flotante2" >Linea 2</a>
                    <br></br>
                    <a href="/linea3" class="btn-flotante3" >Linea 3</a>
                    <br></br>
                    <a href="/linea4" class="btn-flotante4" >Linea 4</a>
                    <br></br>
                    <a href="/linea5" class="btn-flotante5" >Linea 5</a>
                    <br></br>
                    <a href="/linea9" class="btn-flotante9" >Linea 9</a>
                    <br></br>
                    <a href="/linea11" class="btn-flotante11" >Linea 11</a>
                    <br></br>
                    <a href="/linea20P" class="btn-flotante20" >Linea 20P</a>
                    <br></br>
                    <a href="/linea20R" class="btn-flotante20" >Linea 20R</a>
                    <br></br><br></br>



                    <DrawerCloseButton />
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </b>
    )
}
export default MainContentLayout;