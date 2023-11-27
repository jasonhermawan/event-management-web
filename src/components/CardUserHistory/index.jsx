import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Flex, Box, Text, Button, Img } from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";
import { CiCalendarDate } from "react-icons/ci";

export default function CardHistoryUser(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w={"100%"}
      h={{base:"160px" , md:"270px"}}
      borderRadius={"5px"}
      boxShadow={"0px 3px 10px 1px rgba(0,0,0,0.1)"}
      display={"flex"}
      flexDirection={"column"}
      mt={{base:"2px" , md:"5px"}}
      mb={{base:"7px" , md:"10"}}
    >
      <Box
        w={"100%"}
        h={{base:"20px" , md:"60px"}}
        borderBottom={"1px solid rgba(0,0,0,0.1)"}
        borderRadius={"5px"}
        display={{base:"none" , md:"flex"}}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"0px 50px"}
        
      >
        <Box
          w={{base:"50px" , md:"130px"}}
          opacity={"0.5"}
          borderRadius={"5px"}
          display={{base:"none" , md:"flex"}}
          justifyContent={"center"}
          h={{base:"100%" , md:"50%"}}
          alignItems={"center"}
          backgroundColor={"khaki"}
          border={"1px solid black"}
          
        >
          <Text  fontSize={{base:"6px" , md:"12px"}} fontWeight={"500"}>
            Payment Success
          </Text>
        </Box>
        <Box  display={{base:"none" , md:"inline"}}>
          <SlOptions fontSize={{base:"10px" , md:"13px"}} />
        </Box>
      </Box>
      <Box
        className="Content"
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        p={{base:"0px" , md:"10px 30px"}}
      >
        <Box
          className="Content-Left"
          w={{base:"150px" , md:"40%"}}
          h={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          justifyContent={"center"}
          ml={{base:"5px" , md:"0px"}}
        >
          <Text fontWeight={"bold"} fontSize={{base:"10px" , md:"22px"}}>
            {props.HistoryName}
          </Text>
          <Box display={"flex"} flexDirection={"row"}>
            <CiCalendarDate />
            <Text ml={"5px"} fontSize={{base:"10px" , md:"12px"}}>
              {props.HistoryDate}
            </Text>
          </Box>
          <Text fontSize={{base:"9px" , md:"13px"}}>Pembelian pada 16 Jun 2023, 17:24</Text>
          <Box   display={"flex"} flexDirection={"row"} gap={"10px"}>
            <Button fontSize={{base:"10px" , md:"12px"}} w={{base:"60px" , md:"80px"}} h={{base:"30px" , md:"35px"}} colorScheme="blue" border={"0px"}>
              E-Voucher
            </Button>
            <Button  fontSize={{base:"10px" , md:"13px"}} w={{base:"60px" , md:"80px"}} h={{base:"30px" , md:"35px"}} onClick={onOpen} variant={"outline"}>
              Invoice
            </Button>
          </Box>
        </Box>
        <Box
          className="Content-Right"
          w={{base:"150px" , md:"40%"}}
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
        >
          <Img
            borderRadius={"10px"}
            h={{base:"100px" , md:"170px"}}
            cursor={"pointer"}
            src={props.HistoryBanner}
            alt=" logo event"
          />
        </Box>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.HistoryName}</ModalHeader>
          <ModalBody display={"flex"} flexDir={"column"}>
            <Box display={"flex"} justifyContent={"center"} w={"90%"} backgroundColor={"red"} h={"170px"}>Banner</Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
