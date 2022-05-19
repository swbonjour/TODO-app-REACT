import { Box } from "@chakra-ui/react";
import Main from "./Main.jsx";
import Sphere from "./Sphere.jsx";
import Header from "./Header.jsx";
import TodoList from "./TodoList.jsx";

export default function Layout() {

    return (
        <Box maxW="100%" height="100vh" backgroundColor="#E7FFFB" display="flex" justifyContent="center" alignItems="center">
            <Sphere left="26rem" top="26rem" background="linear-gradient(203.39deg, #DFC4FA 7.52%, rgba(47, 222, 191, 0.8) 90.39%)"/>
            <Sphere left="76rem" top="10rem" background="linear-gradient(203.39deg, #F1CCCC 7.52%, rgba(222, 47, 47, 0.8) 90.39%)"/>
            <Main>
                <Header />
                <TodoList />
            </Main>
        </Box>
    )
}