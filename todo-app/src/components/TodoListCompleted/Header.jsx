import { Box, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import ButtonUncompleted from "./ButtonUncompleted.jsx";

export default function Header() {
    
    return (
        <Box display="flex" justifyContent="space-between" alignCenter="center" flexDirection="row" mt="2rem" w="80%" mx="auto">
            <Text color="brand.900" fontWeight="bold" fontSize="24px" display="flex">TODO <FaCheck fontSize="32px"/></Text>
            <Box display="flex" gap="2rem">
                <ButtonUncompleted />
            </Box>
        </Box>
    )
}