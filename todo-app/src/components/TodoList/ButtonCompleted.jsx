import { Box, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function ButtonCompleted() {
    
    return (
        <Box>
            <Text fontWeight="bold" fontSize="24px" color="brand.800" cursor="pointer"><Link href="/completed">Completed</Link></Text>
        </Box>
    )
}