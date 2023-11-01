import { Flex, Box, Text , Button} from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";
import { CiCalendarDate } from "react-icons/ci";

export default function CardHistoryUser() {
  return (
    <Flex
      w={"100%"}
      h={"270px"}
      borderRadius={"5px"}
      boxShadow={"0px 3px 10px 1px rgba(0,0,0,0.1)"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        w={"100%"}
        h={"60px"}
        borderBottom={"1px solid rgba(0,0,0,0.1)"}
        borderRadius={"5px"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"0px 50px"}
      >
        <Box
          w={"100px"}
          opacity={"0.5"}
          borderRadius={"5px"}
          display={"flex"}
          justifyContent={"center"}
          h={"50%"}
          alignItems={"center"}
          backgroundColor={"khaki"}
          border={"1px solid black"}
        >
          <Text fontSize={"12px"} fontWeight={"500"}>
            Payment Success
          </Text>
        </Box>
        <Box>
          <SlOptions fontSize={"20px"} />
        </Box>
      </Box>
      <Box className="Content" w={"100%"} h={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}p={"20px 30px"}>
        <Box className="Content-Left" w={"40%"}h={"100%"} border={"1px solid gray"}>
            <Text fontWeight={"bold"} fontSize={"20px"}>Purwadhika School Surabaya</Text>
            <Box display={"flex"} flexDirection={"row"}><CiCalendarDate/>
            <Text fontSize={"12px"}>12 July 2023</Text>
            </Box>
            <Button colorScheme="blue">
              E-Voucher
            </Button>
            <Button variant={"outline"}>
              Invoice
            </Button>
        </Box>
        <Box className="Content-Right" w={"40%"} h={"100%"} border={"1px solid gray"}></Box>
      </Box>
    </Flex>
  );
}
