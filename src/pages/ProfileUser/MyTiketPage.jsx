import React, { useEffect, useState } from "react";
import LayoutUser from "./LayoutUser";
import { Flex, Box, Text } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { RiAccountCircleFill } from "react-icons/ri";
import CardHistoryUser from "../../components/CardUserHistory";
import axios from "axios";
import EmptyPage from "./EmptyPage";
import { useNavigate } from "react-router-dom";

export default function MyTicketPage() {

  const token = localStorage.getItem("TOKEN");
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/signin")
    }
  }), []

  const [history, setHistory] = useState([]);

  



  const getEvent = async () => {
   const result =  await axios.get(`${import.meta.env.VITE_API_URL}/events`)
try {
  setHistory(result.data);
} catch (error) {
  console.log(error);
}
  };

  useEffect(() => {
    getEvent();
  }, []);

  const printHistory = () => {
    return history.map((val) => {
      return (
          <CardHistoryUser
            HistoryBanner={`${import.meta.env.VITE_API_URL}/public/events/${
              val.banners[0].image
            }`}
            HistoryName={val.name}
            HistoryDate={val.date}
          />
      );
    });
  };


  return (
    <LayoutUser>
      <Flex
        ml={{base:"50px" , sm:"270px"}}
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
          <Text fontSize={{base:"16px" , md:"20px"}} fontWeight={"bold"} color={"gray"}>
            My Ticket
          </Text>
         
        </Box>
        <Box w={"100%"} h={"100vh"} ml={{base:"0px" ,sm : "0px"}} p={{base:"0px" , sm:"0px 50px"}} >
          <Tabs w={"100%"} variant="unstyled" mt={"20px"}>
            <TabList w={"100%"} borderBottom={"1px solid rgba(237, 231, 225 )"}>
              <Tab fontSize={{base:"14px" , md:"18px"}} w={{base:"50%" , md:"20%"}} fontWeight={"bold"} color={"gray"}>
                Active Events
              </Tab>
              <Tab fontSize={{base:"14px" , md:"18px"}} w={{base:"50%" , md:"20%"}} fontWeight={"bold"} color={"gray"}>
                Past Events
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                  <EmptyPage/>
              </TabPanel>
              <TabPanel>
              {printHistory()}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </LayoutUser>
  );
}
