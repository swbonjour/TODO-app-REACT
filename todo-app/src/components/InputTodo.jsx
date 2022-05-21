import { Box, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { createTask } from "../utils/fetchApi";

export default function InputTodo({ updateFunction }) {

    const [task, setTask] = useState(undefined);

    async function fetchApi(todo) {
        return await createTask(todo);
    }

    async function clearInput(e) {
        setTask("");
    }

    return (
        <Box>
            <InputGroup>
                <Input w="100%" h="3rem" boxShadow="inset 0px -1px 14px -2px rgba(0, 0, 0, 0.25)" borderRadius="0" placeholder="What else do you wanna do today?" _placeholder={{ textAlign: "center", opacity: 0.2, fontWeight: "bold", fontSize: "18px", color: "black", paddingLeft: "1.4rem"}} 
                onChange={(e) => 
                    { setTask(e.currentTarget.value) } } value={task} 
                onKeyDown={(e) => { 
                    if(e.keyCode === 13 && e.currentTarget.value === "") 
                    {e.currentTarget.style.borderColor = "#FFA0A0"} else if(e.keyCode === 13) 
                    { fetchApi(task); clearInput(e); updateFunction(); e.currentTarget.style.borderColor = "" }}}></Input>
                <InputRightElement mt="0.3rem" mr="1rem" opacity="0.2" cursor="pointer"><Button type="submit" 
                onClick={(e) => {
                    if(e.currentTarget.parentNode.previousSibling.value === "")
                    {e.currentTarget.parentNode.previousSibling.style.borderColor = "#FFA0A0"} else
                    { fetchApi(task); clearInput(e); updateFunction(); e.currentTarget.parentNode.previousSibling.style.borderColor = "" }}}><FaPlus /></Button></InputRightElement>
            </InputGroup>
        </Box>
    )
}