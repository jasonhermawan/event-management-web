import React from "react";
import Layout from "../../Layout";
import { Flex, Box, Text, Button, Checkbox } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TicketCategory from "../../components/TicketCategory";
import "./index.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15 * 60);
  //state untuk menyimpan pemilihan tiket 
  const [selectedTickets, setSelectedTickets] = useState({
    Silver: false,
    Gold: false,
    Platinum: false,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
      const newCountdown = prevCountdown - 1;
      localStorage.setItem("countdown", newCountdown);
      return newCountdown;
    }, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(intervalId);
  }, []); // Dependensi kosong agar useEffect hanya dijalankan sekali saat komponen dimount

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const ticketPrices = {
    Silver: 25000,
    Gold: 50000,
    Platinum: 100000,
  };

  const calculateTotalPrice = () => {
    return Object.keys(selectedTickets).reduce((total, ticket) => {
      return selectedTickets[ticket] ? total + ticketPrices[ticket] : total;
    }, 0);
  };
 

  /////////////////////////

  return (
    <Layout>
      <Flex w={"100%"} h={"82vh"} mt={"20px"}>
        <Box
          className="left-checkout"
          w={"60%"}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <Box
            boxShadow={"0px 0px 5px 1px rgba(0,0,0,0.1)"}
            w={"80%"}
            h={"200px"}
            mr={"60px"}
            borderRadius={"10px"}
          >
            <Box w={"100%"} h={"200px"} display={"flex"} flexDirection={"row"}>
              <Box
                w={"40%"}
                m={"15px"}
                borderRadius={"10px"}
                boxShadow={"0px 0px 5px 1px rgba(0,0,0,0.1)"}
                bgColor={"gray"}
              ></Box>
              <Box w={"60%"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={"30px"}
                  color={"rgba(0,0,0,0.8)"}
                >
                  Purwadhika School Surabaya{" "}
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  fontSize={"14px"}
                  m={"10px 0px"}
                >
                  <i class="fa-solid fa-calendar-days"></i> 12 Des 2023
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  fontSize={"14px"}
                  m={"10px 0px"}
                >
                  <i class="fa-solid fa-clock"></i>19:00 - 20:00
                </Text>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  fontSize={"14px"}
                  m={"10px 0px"}
                >
                  <i class="fa-solid fa-location-dot"></i>
                  Surabaya , Jawa timur
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="right-checkout" w={"30%"}>
          <Box
            boxShadow={"0px 0px 5px 1px rgba(0,0,0,0.1)"}
            w={"80%"}
            h={"100%"}
            borderRadius={"10px"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              borderRadius={"10px"}
              flexDirection={"row"}
              w={"100%"}
              h={"40px"}
              backgroundColor={"gold"}
              fontWeight={"500"}
            >
              {countdown > 0 ? (
                <Text>{formatTime(countdown)} Complete Your Payment</Text>
              ) : (
                <Text>Waktu sudah habis!</Text>
              )}
            </Box>
            <Box p={"10px"}>
              <TicketCategory 
              ticketName="Silver" 
              ticketPrice="Rp 25.000" 
              onSelect={(isChecked) =>
                setSelectedTickets((prev) => ({ ...prev, Silver: isChecked }))
              }/>
              <TicketCategory ticketName="Gold" ticketPrice="Rp 50.000" onSelect={(isChecked) =>
                setSelectedTickets((prev) => ({ ...prev, Gold: isChecked }))
              } />
              <TicketCategory ticketName="Platinum" ticketPrice="Rp 100.000" onSelect={(isChecked) =>
                setSelectedTickets((prev) => ({ ...prev, Platinum: isChecked }))
              }/>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} mr={"10px"}>
            <Text>Total Price: Rp.{calculateTotalPrice()}</Text>
            </Box>
            <Box
              display={"flex"}
              gap={"20px"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Text textAlign={"center"}>
                <Checkbox m={"5px"} defaultChecked></Checkbox>I agree with{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  terms and conditions
                </span>{" "}
                that apply at EventClick
              </Text>
              <Button
                onClick={() => navigate("/checkout/payment-succes")}
                w={"90%"}
                colorScheme="blue"
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Checkout;
