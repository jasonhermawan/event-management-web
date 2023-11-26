import { Flex, Text, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import LayoutUser from "./LayoutUser";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";

const BasicInformation = () => {
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
            fontSize={{ base: "13px", md: "20px" }}
            fontWeight={"bold"}
           color={"gray"}
          >
            Your Profile
          </Text>
          <Button
            borderRadius={"full"}
            w={{ base: "40px", sm: "200px" }}
            leftIcon={<RiAccountCircleFill />}
            backgroundColor={"#F5F7FA"}
            variant="solid"
          >
            <Text display={{ base: "none", sm: "block" }}>Profile User</Text>
          </Button>
        </Box>
        <Box margin={"0px 50px"} >
          <Box w={"100%"} h={"100vh"}>
            <Box w={"100%"} h={"50px"} m={"50px 0px 0px 0px"}>
              <Text
                mb={"10px"}
                fontSize={"25px"}
                fontWeight={"bold"}
              >
                Basic Information
              </Text>
              <hr style={{ width: "90%" }} />
            </Box>
            <Box w={"100%"} h={"200px"} m={"50px 0px"}>
              <Box ml={"50px"} w={"100%"} h={"70px"}>
                <Text fontSize={"15px"} fontWeight={"bold"} color={"gray"}>
                  Profile Picture
                </Text>
                <Text>
                  {" "}
                  Your avatar and cover photo are the first images you will see
                  on your profile account.
                </Text>
                <Box
                  w={"100%"}
                  h={"150px"}
                  display={"flex"}
                  flexDir={"row"}
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
                  <Box display={"flex"} flexDir={"column"}>
                    <Text fontSize={"15px"} fontWeight={"bold"} >
                      AVATARS
                    </Text>
                    <Text>Use a high resolution square image of up to 1MB</Text>
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
              m={"10px 0px"}
            >
              <Text fontSize={"18px"} fontWeight={"bold"}>
                Email
              </Text>
              <Text color={"gray"}>Yogapratama120503@gmail.com</Text>
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
              <Text fontSize={"18px"} fontWeight={"bold"}>
                Username
              </Text>
              <Text color={"gray"}>Chandra</Text>
              <hr style={{ width: "90%" }} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </LayoutUser>
  );
};

export default BasicInformation;
