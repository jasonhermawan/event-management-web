import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormHelperText,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  RadioGroup,
  HStack,
  Radio,
  Image
} from "@chakra-ui/react";
import Layout from "../../Layout";
import "./createEvent.css";
import { FaUpload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { HiOutlineTicket } from 'react-icons/hi2';
import Banner from '../../assets/banner-event.jpg'
// import { FaMoneyBillAlt, FaMoneyBillWave } from 'react-icons/fa';
import axios from "axios";
import { API_URL } from "../../helper";

const CreateEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  // const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [isDateTimeModalOpen, setIsDateTimeModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [eventName, setEventName] = useState("");
  const [tags, setTags] = useState("");
  const [hostedBy, setHostedBy] = useState("");
  // const [selectedDate, setSelectedDate] = useState("");
  // const [selectedTime, setSelectedTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const [ticketType, setTicketType] = useState('free');
  const [selectedTicketCategory, setSelectedTicketCategory] = useState('gold');

  const handleSaveCategory = () => {
    // Handle save func
  };

  const handleBannerUpload = () => {
    // handle save banner
  };

  const handleLogoUpload = () => {
    //handle save logo
  };

  const handleSaveDate = () => {};

  const handleSaveTime = () => {
    // Handle save func
  };

  const handleSaveLocation = () => {};
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderWidth={"1px"}
        borderColor={"gray"}
        margin={"auto"}
        w={"60%"}
        borderRadius={"3%"}

      >
        <Box
  w="100%"
  h="420px"
  borderWidth="1px"
  borderColor="gray"
  borderRadius="3%"
  borderBottomRadius={0}
  padding={0}
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  position="relative"
>
  <label
    htmlFor="file-banner"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <Box
      as="span"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="60px"
      h="60px"
      borderRadius="50%"
      bg="blue.200"
      color="white"
      marginBottom="8px"
    >
      <FaUpload size={25} />
    </Box>
  </label>
  <Input
    type="file"
    id="file-banner"
    accept="image/*"
    display="none"
    onChange={handleBannerUpload}
    position="absolute"
    top="0"
    left="0"
    width="100%"
    height="100%"
    opacity="0"
    cursor="pointer"
  />
  <Image
    src={Banner}
    alt="Banner"
    width="100%"
    height="auto"
    position="absolute"
    top="0"
    left="0"
    zIndex="-1"
    borderRadius={"3%"}
    borderBottomRadius={0}
  />
  <Text fontSize="40px" color="white">
    Upload images/posters/banners
  </Text>
  <Text fontSize="25px" color="white">
    Recommended 724 x 340px and no more than 2Mb
  </Text>
</Box>

        <Box w="100%" p={4} paddingLeft={"65px"} paddingBottom={"40px"}>
          <FormControl>
            <FormControl>
              <Input
                type="text"
                placeholder="Event Name*"
                fontSize={"25px"}
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                bg="transparent"
                borderWidth="0 0 0px 0"
              />
            </FormControl>

            <Button
              mt={4}
              onClick={() => setIsModalOpen(true)}
              bgColor={"white"}
              _hover={"white"}
            >
              Select Category*
            </Button>
          </FormControl>

          <Box w="100%" display={"flex"} flexDirection={"row"}>
            <FormControl>
              <FormLabel>Hosted by</FormLabel>
              <Box display="flex" alignItems="center">
                <label
                  htmlFor="file-upload"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    as="span"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="50px"
                    h="50px"
                    borderRadius="50%"
                    bg="blue.200"
                    color="white"
                    marginRight="8px"
                  >
                    <FaUpload size={25} />
                  </Box>
                </label>
                <Input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  display="none"
                  onChange={handleLogoUpload}
                />
                <Input
                  type="text"
                  placeholder="Hosted by"
                  value={hostedBy}
                  onChange={(e) => setHostedBy(e.target.value)}
                  fontSize={"15px"}
                  bg="transparent"
                  borderWidth="0 0 0px 0"
                />
              </Box>
            </FormControl>
            <FormControl>
              <FormLabel>Date & Time</FormLabel>
              <Box display="flex" alignItems="center">
                <BsCalendar2DateFill size={30} style={{ marginRight: "8px" }} />{" "}
                <Button
                  onClick={() => setIsDateTimeModalOpen(true)}
                  bg={"white"}
                  _hover={"white"}
                >
                  Select Date & Time
                </Button>
              </Box>
            </FormControl>

            <FormControl>
              <FormLabel>Location</FormLabel>
              <Box display="flex" alignItems="center">
                <FaLocationDot size={30} style={{ marginRight: "8px" }} />
                <Button
                  bg={"white"}
                  _hover={"white"}
                  onClick={() => setIsLocationModalOpen(true)}
                >
                  Select a Location
                </Button>
              </Box>
            </FormControl>

          </Box>
        </Box>
      </Box>
      <Box paddingTop={"25px"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>

      <Tabs isLazy onChange={handleTabChange} alignItems="center" w="60%" display="flex" flexDirection="column">
  <TabList gap={"100%"} justifyContent="center" alignItems="center">
    <Tab>TICKET CATEGORY</Tab>
    <Tab>EVENT DESCRIPTION</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <FormControl pb={4} w="60%" alignItems="center">
        <RadioGroup value={ticketType} onChange={(value) => setTicketType(value)} justifyContent="center">
          <HStack spacing="24px" alignItems="center">
            <Radio value="free">
              <Box display="flex" alignItems="center">
                <HiOutlineTicket size={90} style={{ marginRight: '8px' }} />
                <span style={{ display: 'flex', alignItems: 'center' }}>Free</span>
              </Box>
            </Radio>
            <Radio value="paid">
              <Box display="flex" alignItems="center">
                <HiOutlineTicket size={90} style={{ marginRight: '8px' }} />
                <span style={{ display: 'flex', alignItems: 'center' }}>Paid</span>
              </Box>
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </TabPanel>
    <TabPanel>
   
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>




      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Event Format*</FormLabel>
              <Select
                name="format-option"
                id="format-option"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option value="">Choose an event format</option>
                <option value="Festival, Bazaar, Fair">
                  Festival, Bazaar, Fair
                </option>
                <option value="Concert">Concert</option>
                <option value="Competition / Match">Competition / Match</option>
                <option value="Exhibition">Exhibition</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Show">Show</option>
                <option value="Seminar">Seminar</option>
                <option value="Training / Sertification">
                  Training / Sertification
                </option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Event Topic*</FormLabel>
              <Select
                name="topic-option"
                id="topic-option"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option value="">Select an event topic</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
                <option value="Lifestyle / Music">Lifestyle / Music</option>
                <option value="Sports">Sports</option>
                <option value="Investment">Investment</option>
                <option value="Automotive">Automotive</option>
                <option value="Science / Technology">
                  Science / Technology
                </option>
                <option value="Family">Family</option>
                <option value="E-Sport">E-Sport</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tags</FormLabel>
              <FormHelperText>
                Add keywords so your event is easy to find
              </FormHelperText>
              <Input
                type="text"
                placeholder="Add keywords"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <FormHelperText>0/5 Tags</FormHelperText>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveCategory}>
              Save
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isDateTimeModalOpen}
        onClose={() => setIsDateTimeModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <Tabs align="center">
            <TabList>
              <Tab fontSize={"20"}>Event Date</Tab>
              <Tab fontSize={"20"}>Event Time</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ModalHeader>Select Date</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Start Date</FormLabel>
                    <Input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>End Date</FormLabel>
                    <Input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSaveDate}>
                    Save
                  </Button>
                  <Button onClick={() => setIsDateTimeModalOpen(false)}>
                    Close
                  </Button>
                </ModalFooter>
              </TabPanel>
              <TabPanel>
                <ModalHeader>Select Time</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Starting from</FormLabel>
                    <Input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Until</FormLabel>
                    <Input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSaveTime}>
                    Save
                  </Button>
                  <Button onClick={() => setIsDateTimeModalOpen(false)}>
                    Close
                  </Button>
                </ModalFooter>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Location Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Place Name</FormLabel>
              <Input type="text" placeholder="Enter place name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input type="text" placeholder="Enter address" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input type="text" placeholder="Enter city" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveLocation}>
              Save
            </Button>
            <Button onClick={() => setIsLocationModalOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default CreateEvent;
