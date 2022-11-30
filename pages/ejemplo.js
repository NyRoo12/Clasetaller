import {
Drawer,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
Button,
useDisclosure,
Center,
Flex,
Spacer,
FormControl,
FormLabel,
Switch,
Image,
Link
}

from "@chakra-ui/react";
import React from "react";
import Script from "next/script";

const hola = "aaaa";
const handleClick = (hola) => {
const Layout = ({ children, pageId }) => {

}
};

function Ejemplo() {

const { isOpen, onOpen, onClose } = useDisclosure();
const btnRef = React.useRef();

return (
    <>
    <br />
    <Flex>

        <Button ref={btnRef} w='10%' colorScheme="blue" onClick={onOpen} height='43px' fontSize='17px' left='2%'  >
        LINEAS
        </Button>
        <br />
        <br />
        <Flex color='white'>
        <Center w='1500px' height="720" bg='white.500' border='2px' borderColor='black' width='1200px'>
            <Spacer />
            <Spacer />
            <box>
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24061.16525358198!2d-73.23897385001462!3d-39.83157661485098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9615ee9ff311985f%3A0xc0a003eae97d725f!2sAv.%20Balmaceda%2C%20Valdivia%2C%20Los%20R%C3%ADos!3m2!1d-39.8073766!2d-73.20918979999999!4m5!1s0x9615ee4bc884f601%3A0xe3444bee10bfd1f!2zSW5nLiBSYcO6bCBTw6FleiBTw6FleiwgVmFsZGl2aWEsIExvcyBSw61vcw!3m2!1d-39.850179!2d-73.2501039!5e0!3m2!1ses-419!2scl!4v1668395023561!5m2!1ses-419!2scl" width="1500" height="750" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>0
            </box>
        </Center>

        <flex>

            <Image
            borderRadius='full'
            borderColor='black'
            boxSize='100px'
            objectFit='cover'
            src='images/kasus.png'
            alt='Dan Abramov'
            />

        </flex>
        </Flex>
    </Flex>

    <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
    >
        <DrawerOverlay />
        <DrawerContent >
        <DrawerCloseButton />
        <DrawerHeader>ejemplo</DrawerHeader>

        <FormControl display='flex' alignItems='center' left='5%'>
            <FormLabel mb='0' color='black'>
            Filtrar
            </FormLabel>
            <Switch size='sm' colorScheme='yellow' />
        </FormControl>

        <br />
        <Button w='65%' colorScheme="blue" left='5%' onClick={() => handleClick("Linea 1")} >
            Linea 1
        </Button>
        <br />
        <Button w='65%' colorScheme="purple" left='5%' onClick={() => handleClick("Linea 2")}>
            Linea 2
        </Button>
        <br />
        <Button w='65%' colorScheme="green" left='5%' onClick={() => handleClick("Linea 3")}>
            Linea 3
        </Button>
        <br />
        <Button w='65%' colorScheme="red" left='5%' onClick={() => handleClick("Linea 4")}>
            Linea 4
        </Button>
        <br />
        <Button w='65%' colorScheme="pink" left='5%' onClick={() => handleClick("Linea 5")}>
            Linea 5
        </Button>
        <br />
        <Button w='65%' colorScheme=" yellow" left='5%' onClick={() => handleClick("Linea 9")}>
            Linea 9
        </Button>
        <br />
        <Button w='65%' colorScheme="red" left='5%' onClick={() => handleClick("Linea 11")}>
            Linea 11
        </Button>
        <br />
        <Button w='65%' colorScheme="cyan" left='5%' onClick={() => handleClick("Linea 13")}>
            Linea 13
        </Button>
        <br />
        <Button w='65%' colorScheme="orange" left='5%' onClick={() => handleClick("Linea 20")}>
            Linea 20
        </Button>
        <br />
        <Button w='65%' colorScheme="orange" left='5%' onClick={() => handleClick("Linea 1")} >
            Linea 20 T
        </Button>

        <DrawerFooter>
        </DrawerFooter>
        </DrawerContent>
    </Drawer>

    </>

);


}
export default Ejemplo;
