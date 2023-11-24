import { Flex , Text , Box } from "@chakra-ui/react";
import { HiOutlineTicket } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";

export default function EmptyPage () {
    const navigate = useNavigate()
    return (
        <Flex w={"100%"} h={"70vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
             <Box fontSize={"150px"} color={"gray"}  opacity={"70%"}>
             <HiOutlineTicket/>
             </Box>
             <Text fontSize={"15px"} textAlign={"center"}  opacity={"70%"}>If you don't have a ticket yet, please buy a ticket first <br /> <span onClick={() => navigate("/")} style={{fontWeight:"bold", cursor:"pointer", color:"blue"}}>search Events</span> </Text>
        </Flex>
    )
}
