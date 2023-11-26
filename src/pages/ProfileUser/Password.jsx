import { Flex ,Box , Text } from "@chakra-ui/layout"
import LayoutUser from "./LayoutUser";

const Password = () => {
    return <LayoutUser>
        <Flex
         ml={{ base: "50px", sm: "270px" }}
         w={"100%"}
         h={"100vh"}
         display={"flex"}
         flexDirection={"column"}>
             <Box
          className="Navbar"
          w={"100%"}
          h={"65px"}
          boxShadow={"0px 0px 1px 1px gray"}
          flexDirection={"row"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between  "}
          p={"30px 50px"}
        >
          <Text
            fontSize={{ base: "13px", md: "20px" }}
            fontWeight={"bold"}
            color={"gray"}
          >
          Reset Password 
          </Text>
          
        </Box>
        </Flex>
    </LayoutUser>
}

export default Password;