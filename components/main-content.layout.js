
import{
    Button,
    box,
    pageId,
    data,
    children,
    Center,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerFooter,
    
}

from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from "next/link";
import Head from "next/head";
import { chakra, Grid } from "@chakra-ui/react";
import React from "react";


const MainContentLayout=({children})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return(
        <b className="dsc-main-content">
        <div className="main">
            {children}
        </div>
<<<<<<< HEAD
        <a class="btn-flotante" onClick={onOpen}>LINEAS</a>
        
=======
        <a class="btn-flotante" onClick={onOpen}>LINEAS </a>
        <Link href="/loading">
        <img class="circular--square" src="images/Kasus.gif" >
        </img>
        </Link>
>>>>>>> 8fe37f7d144a87c30f41fcd1a06b411cf917f5cc
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
        <a href="/linea1" class="btn-flotante2" >Linea 1</a>
        <br></br>
        <a href="/linea2"  class="btn-flotante1" >Linea 2</a>
        <br></br>
        <a href="/linea3"  class="btn-flotante3" >Linea 3</a>
        <br></br>
        <a href="/linea4"  class="btn-flotante4" >Linea 4</a>
        <br></br>
        <a href="/linea5"  class="btn-flotante5" >Linea 5</a>
        <br></br>
        <a href="/linea9"  class="btn-flotante9" >Linea 9</a>
        <br></br>
        <a href="/linea11"  class="btn-flotante11" >Linea 11</a>
        <br></br>
<<<<<<< HEAD
        <a href="/linea20"  class="btn-flotante20" >Linea20</a>
        <br></br>
        <br></br>
        <a href="/lineaxd"  class="btn-flotante20" >Lineaasdfasfasdf</a>
        <br></br>

        
        <a href="/linea20">
        <Button w='80%' colorScheme="green" left='5%' height='50px'>
            LINEA 3
        </Button>
        </a>
=======
        <a href="/linea20"  class="btn-flotante20" >Linea 20</a>
        <br></br><br></br>
        
        
>>>>>>> 8fe37f7d144a87c30f41fcd1a06b411cf917f5cc
        
        <DrawerCloseButton/>
        <DrawerFooter>
        </DrawerFooter>
        </DrawerContent>
    </Drawer>


        </b>
    )
}
export default MainContentLayout;