
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
    DrawerFooter
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
        <a  class="btn-flotante" onClick={onOpen}>LINEAS </a>
        <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
    >
    <DrawerOverlay />
        <DrawerContent >
        <DrawerCloseButton />
        <>QUE</>
        <a href="/linea1" class="btn-flotante2" >Linea1</a>
        <br></br>
        <a href="/linea2"  class="btn-flotante2" >Linea2</a>
        <br></br>
        <a href="/linea2"  class="btn-flotante2" >Linea3</a>
        <br></br>
        <a href="/linea2"  class="btn-flotante2" >Linea4</a>
        <br></br>
        <a href="/linea2"  class="btn-flotante2" >Linea5</a>
        <br></br>
        <a href="/linea2"  class="btn-flotante2" >Linea9</a>
        <DrawerCloseButton />
        <DrawerFooter>
        </DrawerFooter>
        </DrawerContent>
    </Drawer>


        </b>
    )
}
export default MainContentLayout;