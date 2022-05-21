import { Box, Text} from "@chakra-ui/react";
import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";

export default function InputTodo({ todo }) {

    return (
        <Box>
            <Box w="90%" h="3rem" mr="-10rem" display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" boxShadow="inset 0px -1px 14px -2px rgba(0, 0, 0, 0.25)" borderRadius="0">
                <Box ml="1rem"><FaCheck fontSize="24px" color="#8DDBCD" cursor="pointer"/></Box><Text>{todo}</Text><Box mr="1rem" display="flex" gap="1rem"><FaPencilAlt fontSize="24px" color="#7A9CF3" cursor="pointer"/><FaTrash fontSize="24px" color="#FFA0A0" cursor="pointer"/></Box>
            </Box>
        </Box>
    )
}