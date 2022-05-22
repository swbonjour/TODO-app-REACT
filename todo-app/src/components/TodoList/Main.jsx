import { Box } from "@chakra-ui/react";

export default function Main(props) {

    return (
        <Box w="50rem" h="30rem" background="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0) 100%)" boxShadow="0px 4px 4px rgba(0,0,0, 0.25)" backdropFilter="blur(30px)" borderRadius="50px" borderWidth="4px" borderColor="linear-gradient(114.11deg, #FFFFFF 0%, rgba(142, 124, 124, 0) 100%)">{props.children}</Box>
    )
}