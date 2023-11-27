import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Button, Result } from "antd";
import {  useNavigate } from "react-router-dom";
import RateUs from "../../components/RateUs/RateUs";

const SuccesPayment = () => {
    const navigate = useNavigate()
    
 return( <Flex
    display={"flex"}
    flexDir={"column"}
    h={"100vh"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Result
      status="success"
      title="Event Ticket Successfully Purchased"
      subTitle="Thanks for order , and enjoy with our Event"
      extra={[
        <RateUs/> ,
        <Button onClick={() => navigate("/")} type="primary" key="console">
          Back to Dashboard Menu
        </Button>,
        <Button onClick={() => navigate("/checkout")}  key="buy">Buy Again</Button>,
      ]}
    />
  </Flex>)
};
export default SuccesPayment;
