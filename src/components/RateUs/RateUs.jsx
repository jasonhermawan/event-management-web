import React from 'react';
import { Rate } from 'antd';
import { Flex  ,Text}  from '@chakra-ui/react';
const RateUs = () => {
return(
    <Flex display={"flex"} flexDir={"column"} mb={"20px"}>
        <Text>Rate your experience using our website</Text>
    <Rate allowHalf defaultValue={2.5} />
    </Flex>

)};
export default RateUs;