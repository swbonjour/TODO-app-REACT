import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function InputTodo() {

    return (
        <Box>
            <InputGroup>
                <Input w="100%" h="3rem" boxShadow="inset 0px -1px 14px -2px rgba(0, 0, 0, 0.25)" borderRadius="0" placeholder="What else do you wanna do today?" _placeholder={{ textAlign: "center", opacity: 0.2, fontWeight: "bold", fontSize: "18px", color: "black", paddingLeft: "1.4rem"}}></Input>
                <InputRightElement mt="0.3rem" mr="1rem" opacity="0.2" cursor="pointer" children={<FaPlus />}/>
            </InputGroup>
        </Box>
    )
}