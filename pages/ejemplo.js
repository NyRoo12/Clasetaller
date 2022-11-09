import {
    Input,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Box,
    Center,
    Flex,
    Spacer
  } 
  from "@chakra-ui/react";
  import React from "react";
  
  const Ejemplo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
      <>
        <Box bg='#5499C7' w='30%' h='20' borderRadius='lg' p={4} color='white'>
            <br/ >
            <Center h='5px' color='white'>
            UwU
            </Center>
        </Box>
        <br/ >

        <Flex>
        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 1
        </Button>
        </Flex>
        <Flex>
        <br/ >
        <br/ >
        </Flex>

        <Flex>
        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 2
        </Button>

        </Flex>
        <Flex>
        <br/ >
        <br/ >
        </Flex>

        <Flex>
        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 3
        </Button>
        <br/ >
        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 4
        </Button>
        <br/ >
        <Flex color='white'>
          <Center w='1200px' bg='white.500'>
            <Spacer/>
            <Spacer/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49028.436995934324!2d-73.26151811494634!3d-39.823199764922194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615ee891aab33e5%3A0x35c9b4ab79b2d79b!2sValdivia%2C%20Los%20R%C3%ADos!5e0!3m2!1ses-419!2scl!4v1666194642017!5m2!1ses-419!2scl" width="1000" height="700" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>0
          </Center>
        </Flex>
        <br/ >
        <br/ >
        </Flex>



        <Flex>

        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 5
        </Button>
        <br/ >
        <br/ >

        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 9
        </Button>

        <br/ >
        <br/ >

        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 11
        </Button>
        <br/ >
        <br/ >

        <Button ref={btnRef} w= '10%' colorScheme="teal" onClick={onOpen}>
            Linea 20
        </Button>
        </Flex>



        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>MicroTransportes</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  export default Ejemplo;