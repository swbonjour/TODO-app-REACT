import { Box } from "@chakra-ui/react";

export default function Sphere({left, top, background}) {

    return (
        <Box w="16rem" h="16rem" borderRadius="50%" position="absolute" background={background} left={left} top={top}></Box>
    )
}