
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
        <a class="btn-flotante" onClick={onOpen}>LINEAS </a>
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
        <a href="/linea1" class="btn-flotante2" >Linea1</a>
        <br></br>
        <a href="/linea2"  class="btn-flotante1" >Linea2</a>
        <br></br>
        <a href="/linea3"  class="btn-flotante3" >Linea3</a>
        <br></br>
        <a href="/linea4"  class="btn-flotante4" >Linea4</a>
        <br></br>
        <a href="/linea5"  class="btn-flotante5" >Linea5</a>
        <br></br>
        <a href="/linea9"  class="btn-flotante9" >Linea9</a>
        <br></br>
        <a href="/linea11"  class="btn-flotante11" >Linea11</a>
        <br></br>
        <a href="/linea20"  class="btn-flotante20" >Linea20</a>
        <br></br><br></br>
        
        
        
        <DrawerCloseButton/>
        <DrawerFooter>
        </DrawerFooter>
        </DrawerContent>
    </Drawer>


        </b>
    )
}
export default MainContentLayout;