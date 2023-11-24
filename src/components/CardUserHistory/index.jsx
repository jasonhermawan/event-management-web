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
      h={"270px"}
      borderRadius={"5px"}
      boxShadow={"0px 3px 10px 1px rgba(0,0,0,0.1)"}
      display={"flex"}
      flexDirection={"column"}
      mt={"5"}
      mb={"10"}
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
          w={"130px"}
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
      <Box
        className="Content"
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        p={"10px 30px"}
      >
        <Box
          className="Content-Left"
          w={"40%"}
          h={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          justifyContent={"center"}
        >
          <Text fontWeight={"bold"} fontSize={"20px"}>
            {props.HistoryName}
          </Text>
          <Box display={"flex"} flexDirection={"row"}>
            <CiCalendarDate />
            <Text ml={"5px"} fontSize={"12px"}>
              {props.HistoryDate}
            </Text>
          </Box>
          <Text fontSize={"13px"}>Pembelian pada 16 Jun 2023, 17:24</Text>
          <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
            <Button colorScheme="blue" border={"0px"}>
              E-Voucher
            </Button>
            <Button onClick={onOpen} variant={"outline"}>
              Invoice
            </Button>
          </Box>
        </Box>
        <Box
          className="Content-Right"
          w={"40%"}
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
        >
          <Img
            borderRadius={"10px"}
            h={"170px"}
            cursor={"pointer"}
            src={props.HistoryBanner}
            alt=""
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
