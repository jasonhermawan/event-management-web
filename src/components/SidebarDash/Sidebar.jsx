import { Flex, Box, Img } from "@chakra-ui/react";
import Logo from "../../assets/white-logo.png";
import ButtonSidebar from "../ButtonSidebar/ButtonSidebar";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { BsBrush } from "react-icons/bs";
import { RiAccountBoxLine, RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <Flex  >
      <Box position={"fixed"} left={"0px"} top={"0px"} bottom={"0px"} backgroundColor={"rgba(0, 40, 85, 1)"} w={{base:"50px" , sm:"270px"}} h={"100vh"} boxShadow={"0px 0px 3px 1px gray"}>
        <Box
          backgroundColor={"rgba(0, 40, 60, 0.9)"}
          h={"65px"}
          justifyContent={"center"}
          alignItems={"center"}
          display={{base:"none" , sm : "flex"}}
        >
          <Img
            cursor={"pointer"}
            h={"100%"}
            p={"20px"}
            src={Logo}
            alt="LogoEvenClick"
            onClick={()=> navigate("/")}
          />
        </Box>
        <Box
          w={"100%"}
          h={"100px"}
          display={"flex"}
          flexDirection={"column"}
          mt={"20px"}
        >
          <ButtonSidebar
            text="Event Exploration"
            logo={<MdOutlineExplore fontSize={"20px"} />}
          />
          
          <ButtonSidebar
            onClick={()=>navigate("/profile-user/my-ticket")}
            text="My Ticket"
            logo={<HiOutlineTicket fontSize={"20px"} />}
          />
        
          
        </Box>
        <hr style={{ width: "90%", margin: " 20px auto", opacity: "0.2" }} />
        <Box
          w={"100%"}
          h={"100px"}
          display={"flex"}
          flexDirection={"column"}
          mt={"20px"}
        >
          <ButtonSidebar
            text="Basic Information"
            logo={<RiAccountBoxLine fontSize={"20px"} />}
          />
          <ButtonSidebar
            text="Password"
            logo={<RiLockPasswordLine fontSize={"20px"} />}
          />
        </Box>
        <Box w={"100%"} h={"100px"} display={"flex"} flexDirection={"column"}>
          <ButtonSidebar
            text="Interest and Preference"
            logo={<BsBrush fontSize={"20px"} />}
          />
          <ButtonSidebar
            text="Settings"
            logo={<AiOutlineSetting fontSize={"20px"} />}
          />
          <Box position={"absolute"} bottom={"20px"}  w={"100%"} >
          <ButtonSidebar
            text="Logout"
            onClick={() => {localStorage.clear(); navigate("/signin")}}
            
            logo={<MdLogout fontSize={"20px"} />}
          />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Sidebar;
