import { Flex, Text, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { RiAccountCircleFill } from "react-icons/ri";
import LayoutUser from "./LayoutUser";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";
import { useEffect, useState } from "react";
import axios from "axios";

const BasicInformation = () => {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const token = localStorage.getItem("TOKEN")

  const getAccountData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/accounts/get-data`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
   setUsername(response.data.accountData.username)
   setEmail(response.data.accountData.email)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAccountData()
  }, [])


  return (
    <LayoutUser>
      <Flex
        ml={{ base: "50px", sm: "270px" }}
        w={"100%"}
        h={"100vh"}
        display={"flex"}
        flexDirection={"column"}
      >
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
            fontSize={{ base: "15px", md: "20px" }}
            fontWeight={"bold"}
           color={"gray"}
          >
            Your Profile
          </Text>
          <Button
            borderRadius={"full"}
            w={{ base: "40px", sm: "100px" }}
            leftIcon={<RiAccountCircleFill />}
            backgroundColor={"#F5F7FA"}
            variant="solid"
          >
            <Text display={{ base: "none", sm: "block" }}>{username}</Text>
       
          </Button>
        </Box>
        <Box margin={{base:"0px 20px" , md:"0px 50px"}} >
          <Box w={"100%"} h={"100vh"}>
            <Box w={"100%"} h={"50px"} m={"50px 0px 0px 0px"}>
              <Text
                mb={"10px"}
                fontSize={{base:"15px" , md:"25px"}}
                fontWeight={"bold"}
                textAlign={{base:"center" , md:"left"}}
              >
                Basic Information
              </Text>
              <hr style={{ width: "90%" }} />
            </Box>
            <Box  w={"100%"} h={"200px"} m={{base:"0px" , md:"50px 0px"}}>
              <Box ml={{base:"0px" , md:"50px"}} w={"100%"} h={"70px"}>
                <Text display={{base:"none" , md:"block"}}  fontSize={{base:"12px" , md:"15px"}} fontWeight={"bold"} color={"gray"}>
                  Profile Picture
                </Text>
                <Text fontSize={{base:"12px" , md:"13px"}} display={{base:"none" , md:"block"}} >
                  {" "}
                  Your avatar and cover photo are the first images you will see
                  on your profile account.
                </Text>
                <Box
                  w={"100%"}
                  h={"150px"}
                  display={"flex"}
                  flexDir={{base:"column" , md:"row"}}
                  alignItems={"center"}
                  m={"40px 0px"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mr={"20px"}
                    w={"120px"}
                    h={"120px"}
                    borderRadius={"full"}
                    >
                   <UploadAvatar/>
                  </Box>
                  <Box   display={"flex"} flexDir={"column"}>
                    <Text ml={{base:"93px" , md:"0px"}}  fontSize={{base:"9px" , md:"15px"}} fontWeight={"bold"} >
                      AVATARS
                    </Text>
                    <Text  mr={{base:"5px" , md:"0px"}} textAlign={{base:"center" , md:"left"}} fontSize={{base:"12px" , md:"13px"}}   >Use a high resolution square image of up to 1MB</Text>
                  </Box>
                </Box>
              </Box>
              <Box> </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDir={"column"}
              w={"100%"}
              h={"100px"}
              m={{base:"0px 0px" , md:"10px 0px"}}
              
            >
              <Text fontSize={{base:"14px" ,md:"18px"}} fontWeight={"bold"}>
                Email
              </Text>
              <Text fontSize={{base:"12px" ,md:"13px"}}  color={"gray"}>{email}</Text>
              <hr style={{ width: "90%" }} />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDir={"column"}
              w={"100%"}
              h={"100px"}
              m={"10px 0px"}
            >
              <Text fontSize={{base:"14px" ,md:"18px"}} fontWeight={"bold"}>
                {username}
              </Text>
              <Text fontSize={{base:"12px" ,md:"13px"}} color={"gray"}>Chandra</Text>
              <hr style={{ width: "90%" }} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </LayoutUser>
  );
};

export default BasicInformation;
