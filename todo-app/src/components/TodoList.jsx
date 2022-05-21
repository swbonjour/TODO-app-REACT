import { Box } from "@chakra-ui/react";
import InputTodo from "./InputTodo.jsx";
import Task from "./Task.jsx";
import { getTasks } from "../utils/fetchApi.js";
import { useEffect, useState } from "react";

export default function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(1);

    useEffect(() => {
        async function fetchApi() {
            const data = await getTasks();
            setTasks(data);
        }
        fetchApi();
    }, [update])

    function updateFetch() {
        setUpdate(update + 1);
    }

    if(tasks.length <= 3) {
        return (
            <Box w="60%" h="60%" mx="auto" my="2rem">
                <InputTodo updateFunction={updateFetch}/>
                <Box h="62%" mt="1rem" css={{">:nth-child(even)": {marginTop: "1rem", marginBottom: "1rem"}}}>
                    {tasks.map((task) => <Task todo={task.todo} key={task._id} id={task._id} state={task.state} updateFunction={updateFetch}/>)}
                </Box>
            </Box>
        )
    } else {
        return (
        <Box w="60%" h="60%" mx="auto" my="2rem">
            <InputTodo updateFunction={updateFetch}/>
            <Box h="62%" mt="1rem" overflowY="scroll" css={{"&::-webkit-scrollbar": { width: "1rem", height: "2rem", marginRight: "2rem", position: "absolute", right: "-100px", background: "white", boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)" }, "&::-webkit-scrollbar-thumb": { width: "100%", background: "#FFA0A0", boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)"}, ">:nth-child(even)": {marginTop: "1rem", marginBottom: "1rem"} }}>
                {tasks.map((task) => <Task todo={task.todo} key={task._id} id={task._id} state={task.state} updateFunction={updateFetch}/>)}
            </Box>
        </Box>
    )
    }
}