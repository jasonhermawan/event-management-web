import { Flex, Box, Text, Img } from "@chakra-ui/react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { CiUser, CiCalendar } from "react-icons/ci";
import LogoChoose from "../../assets/blue-logo.png";
import bgGelombang from "../../assets/gelombang.png";
import WaveAnimation from "../../components/WaveAnimation/WaveAnimation";

const ChooseRole = () => {
  const navigate = useNavigate();
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgImg={bgGelombang}
      bgRepeat={"no-repeat"}
      backgroundPosition={"center"}
      backgroundSize={"100vw"}
      flexDir={"column"}
    >
      <Box
        w={"60%"}
        h={"80%"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Box >
          <Box   mb={{base:"0px", lg:"20px"}} display={"flex"} justifyContent={"center"}>
            <Img 
              w={{ base: "150px" }}
              cursor={"pointer"}
              onClick={() => navigate("/")}
              h={"25px"}
              src={LogoChoose}
            ></Img>
          </Box>
          <Box w={{base:"400px" , lg:"fit-content"}} h={{base:"50px"}} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
            <Text
              className="a"
              display={"flex"}
              flexDir={"row"}
              fontSize={{base:"25px" , lg:"40px"}}
              fontWeight={"bolder"}
            >
              Welcome to EventClick!{" "}
              <span>
                <WaveAnimation />
              </span>
            </Text>
            <Text display={{base:"none" , lg:"block"}} textAlign={"center"}>
              We’re glad you’re here! What can we help you with first?
            </Text>
          </Box>
        </Box>
        <Box
          w={{base:"130%" , lg:"90%"}}
          h={"100%"}
          display={"flex"}
          flexDir={{base:"column" ,lg:"row"}}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box
            className="gray"
            w={{base:"100%" , lg:"40%"}}
            h={{base:"70%" , lg:"85%"}}
            display={"flex"}
            boxShadow={"0px 0px 5px 1px rgba(0 ,0, 0 ,0.2)"}
            bgColor={"white"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            cursor={"pointer"}
            borderRadius={"15px"}
            onClick={() => navigate("/signup")}
          >
            <Box
              className="left"
              bgColor={"rgb(0, 53, 60)"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"full"}
              w={{base:"110px" , lg:"120px"}}
              h={{base:"110px" , lg:"120px"}}
              boxShadow={"0px 0px 5px 1px rgba(0 ,0, 0 ,0.2)"}
            >
              <CiUser fontSize={"100px"} color="white" />
            </Box>
            <Text
              fontWeight={"500"}
              fontSize={{base:"16px" , lg:"20px"}}
              color={"rgba(0 ,0, 0 ,0.8)"}
              mt={{base:"0px" , lg:"20px"}}
            >
              Find experience as a User
            </Text>
          </Box>
          <Box
            className="blue"
            mt={{base:"20px"}}
            w={{base:"100%" , lg:"40%"}}
            h={{base:"70%" , lg:"85%"}}
            display={"flex"}
            justifyContent={"center"}
            bgColor={"white"}
            boxShadow={"0px 0px 5px 1px rgba(0 ,0, 0 ,0.2)"}
            alignItems={"center"}
            flexDir={"column"}
            cursor={"pointer"}
            borderRadius={"15px"}
            onClick={() => navigate("/signup-promotor")}
          >
            <Box
              className="right"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={"rgb(0, 53, 106)"}
              borderRadius={"full"}
              w={{base:"110px" , lg:"120px"}}
              h={{base:"110px" , lg:"120px"}}
              boxShadow={"0px 0px 5px 1px rgba(0 ,0, 0 ,0.2)"}
            >
              <CiCalendar fontSize={"100px"} color="white" />
            </Box>
            <Text
              mt={{base:"0px" , lg:"20px"}}
              fontWeight={"500"}
              fontSize={{base:"16px" , lg:"21px"}}
              color={"rgba(0 ,0, 0 ,0.8)"}
            >
              Organize an Event
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ChooseRole;
