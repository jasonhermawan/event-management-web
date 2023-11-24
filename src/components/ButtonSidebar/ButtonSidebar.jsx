import { Flex , Box} from "@chakra-ui/react";
import './index.css'

export default function ButtonSidebar (props) {
    return <Flex w={"100%"} h={"75px"}  display={"flex"} justifyContent={"center"} alignItems={"center"} onClick={props.onClick} >
        <Box className="nav" w={"100%"} h={"100%"} display={"flex"} flexDirection={"row"}  >
        <Box ml={{base:"0px " , sm:"10px"}} h={"100%"} w={{base:"50px" , sm:"20%"}} display={"flex"} justifyContent={"center"} alignItems={"center"}  cursor={"pointer"} color={{base:"white" , sm:"whiteAlpha.500"}}>
            {props.logo}
        </Box>
        <Box h={"100%"}  w={"80%"} display={{base:"none" , sm:"flex"}} alignItems={"center"}  color={"whiteAlpha.700"} _hover={{color:"white"}}  cursor={"pointer"} fontWeight={"600"} fontSize={"14px"} >
        {props.text}
        </Box>
        </Box>
      
    </Flex>
}