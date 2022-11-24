import { Button, 
    ButtonGroup,
    Grid

} from '@chakra-ui/react'

import React from "react";

const handleClick = (hola) => {
    alert(hola)
    }
const LeftNavLayout=()=>{
    return(
        <c className="dsc-left-nav">
        
            <h6 className="text-white text-center py-3"> e</h6>
            
            <Grid>

            <Button  left ="4px" w="95%" colorScheme="green" onClick={() => handleClick("Linea 1")}>
                Linea 2
            </Button>
            <Button left ="4px" w="95%" colorScheme="red" onClick={() => handleClick("Linea 2")}>
                Linea 3
            </Button>
            <Button left ="4px" w="95%" colorScheme="yellow"  onClick={() => handleClick("Linea 3")}>
                Linea 4
            </Button>
            <Button left ="4px" w="95%" colorScheme="orange" onClick={() => handleClick("Linea 4")}>
                Linea 5
            </Button>
            </Grid>
            
        </c>
    )
}
export default LeftNavLayout;