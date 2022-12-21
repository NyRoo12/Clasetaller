import{
    Button,
    box,
    Spacer,
    Flex
    
}

from "@chakra-ui/react";
import React from "react";

const HeaderLayout=()=>{
    return(
        
        <header className="dsc-header">
            <Flex>
            KASUS
            <img src="images/Kasus_logo.svg" width='40px' height='40px'>
            </img>
            
            </Flex>
        </header>
        
    )
}
export default HeaderLayout;