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

export default function MyTicketPage() {
  return (
    <LayoutUser>
      <Flex
        ml={"270px"}
        w={"100%"}
        h={"100vh"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          className="Navbar"
          w={"100%"}
          minH={"65px"}
          h={"65px"}
          boxShadow={"0px 0px 1px 1px gray"}
          flexDirection={"row"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"30px 50px"}
        >
          <Text fontWeight={"bold"} color={"gray"}>
            My Ticket
          </Text>
          <Button
            borderRadius={"full"}
            w={"200px"}
            leftIcon={<RiAccountCircleFill />}
            backgroundColor={"#F5F7FA"}
            variant="solid"
          >
            Profile User
          </Button>
        </Box>
        <Box w={"100%"} h={"100vh"} p={"0px 50px"}>
          <Tabs w={"100%"} variant="unstyled" mt={"20px"}>
            <TabList w={"100%"} borderBottom={"1px solid rgba(237, 231, 225 )"}>
              <Tab w={"20%"} fontWeight={"bold"} color={"gray"}>
                Active Events
              </Tab>
              <Tab w={"20%"} fontWeight={"bold"} color={"gray"}>
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
                <CardHistoryUser />
                <CardHistoryUser />
                <CardHistoryUser />
              </TabPanel>
              <TabPanel>
                <CardHistoryUser />
                <CardHistoryUser />
                <CardHistoryUser />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </LayoutUser>
  );
}
