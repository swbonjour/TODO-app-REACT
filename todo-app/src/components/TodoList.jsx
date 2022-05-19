import { Box } from "@chakra-ui/react";
import InputTodo from "./InputTodo.jsx";
import Task from "./Task.jsx";

export default function TodoList() {

    return (
        <Box w="60%" h="60%" mx="auto" my="2rem">
            <InputTodo />
            <Box>
                <Task />
                <Task />
                <Task />
            </Box>
        </Box>
    )
}