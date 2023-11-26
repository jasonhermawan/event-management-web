import React from "react";
import Layout from "../../Layout";
import { Flex, Box, Text, Button, Checkbox } from "@chakra-ui/react";
import { CiCalendarDate, CiLocationOn, CiTimer } from "react-icons/ci";
import { useState, useEffect , } from "react";
import { useNavigate } from "react-router-dom";
 

const Checkout = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(15 * 60); // 15 menit dalam detik

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
            h={"85%"}
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
                  flexDirection={"row"}
                  fontSize={"14px"}
                  m={"20px 0px"}
                >
                  <CiCalendarDate fontSize={"20px"} /> 12 Des 2023
                </Text>
                <Text
                  display={"flex"}
                  flexDirection={"row"}
                  fontSize={"14px"}
                  m={"20px 0px"}
                >
                  <CiTimer fontSize={"20px"} /> 20:25 - 23:25
                </Text>
                <Text
                  display={"flex"}
                  flexDirection={"row"}
                  fontSize={"14px"}
                  m={"20px 0px"}
                >
                  <CiLocationOn fontSize={"20px"} />
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
            h={"45%"}
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
                <Text>{formatTime(countdown)}</Text>
              ) : (
                <Text>Waktu sudah habis!</Text> 
              )}

            </Box>
              <Text fontWeight={"500"} textAlign={"center"} >Complete Your Payment</Text>
            <Box
              mt={"50px"}
              display={"flex"}
              gap={"40px"}
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
              <Button   w={"90%"} colorScheme="blue">
                Get Tickets
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Checkout;
