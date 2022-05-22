import { Box, Input, Text} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";
import { deleteTaskById } from "../../utils/fetchApi";
import { updateTask } from "../../utils/fetchApi";

export default function Task({ todo, id, updateFunction, state }) {
    
    const [changedTodo, setChangedTodo] = useState("");
    const [checkChange, setCheckChange] = useState(false);
    const [data, setData] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        if(state) {
            setBackgroundColor("green.200")
        } else {
            setBackgroundColor("");
        }
    })
    
    async function fetchApiDelete(id) {
        return await deleteTaskById(id);
    }

    async function fetchApiUpdate(id, todo, state) {
        return await updateTask(id, todo, state);
    }

    if(!checkChange) {
        return (
            <Box>
                <Box w="90%" h="3rem" mr="-10rem" display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" boxShadow="inset 0px -1px 14px -2px rgba(0, 0, 0, 0.25)" borderRadius="0" backgroundColor={backgroundColor}>
                    <Box ml="1rem"><FaCheck fontSize="24px" color="#8DDBCD" cursor="pointer" onClick={(e) => { fetchApiUpdate(id, todo, !state); updateFunction()}}/></Box><Input w="60%" variant="unstyled" value={todo} cursor="default" onClick={(e) => {e.target.blur()}}></Input><Box mr="1rem" display="flex" gap="1rem"><FaPencilAlt fontSize="24px" color="#7A9CF3" cursor="pointer" 
                    onClick={(e) => {
                        if(e.target.tagName === "svg") {
                            setData(e.target.parentNode.previousSibling.value);
                            e.target.parentNode.previousSibling.focus();
                            setCheckChange(true);
                        } else {
                            setData(e.target.parentNode.parentNode.previousSibling.value);
                            e.target.parentNode.parentNode.previousSibling.focus();
                            setCheckChange(true);
                        }}}/>
                        <FaTrash fontSize="24px" color="#FFA0A0" cursor="pointer" onClick={(e) => { fetchApiDelete(id); updateFunction() }}/></Box>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box>
                <Box w="90%" h="3rem" mr="-10rem" display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" boxShadow="inset 0px -1px 14px -2px rgba(0, 0, 0, 0.25)" borderRadius="0" backgroundColor={backgroundColor}>
                    <Box ml="1rem"><FaCheck fontSize="24px" color="#8DDBCD" cursor="pointer" onClick={(e) => { fetchApiUpdate(id, changedTodo, !state); updateFunction();}}/></Box><Input w="60%" variant="unstyled" value={changedTodo} onChange={(e) => {setChangedTodo(e.currentTarget.value)}} cursor="default"></Input><Box mr="1rem" display="flex" gap="1rem"><FaPencilAlt fontSize="24px" color="#7A9CF3" cursor="pointer" 
                    onClick={(e) => {
                        if(e.target.tagName === "svg") {
                            if(data !== changedTodo) {
                                fetchApiUpdate(id, changedTodo, state);
                            }
                        } else {
                            if(data !== changedTodo) {
                                fetchApiUpdate(id, changedTodo, state);
                            }}}}/>
                        <FaTrash fontSize="24px" color="#FFA0A0" cursor="pointer" onClick={(e) => { fetchApiDelete(id); updateFunction() }}/></Box>
                </Box>
            </Box>
        )
    }
}