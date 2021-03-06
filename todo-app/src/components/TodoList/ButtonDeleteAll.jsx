import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { deleteTasks } from "../../utils/fetchApi";

export default function ButtonCompleted() {
    
    async function fetchApi() {
        return await deleteTasks();
    }

    return (
        <Box>
            <Text fontWeight="bold" fontSize="24px" color="brand.800" cursor="pointer" onClick={(e) => {fetchApi(); window.location.reload()}}><Link to="/">Delete All</Link></Text>
        </Box>
    )
}