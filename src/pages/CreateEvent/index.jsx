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
  Image,
  Textarea,
} from "@chakra-ui/react";
import Layout from "../../Layout";
import "./createEvent.css";
import { FaUpload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import Banner from "../../assets/banner-event.jpg";
// import { FaMoneyBillAlt, FaMoneyBillWave } from 'react-icons/fa';
import axios from "axios";
import { API_URL } from "../../helper";

const CreateEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDateTimeModalOpen, setIsDateTimeModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [tags, setTags] = useState("");
  const [eventName, setEventName] = useState("");
  const [hostedBy, setHostedBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  // const [selectedTab, setSelectedTab] = useState(0);
  // const [ticketType, setTicketType] = useState("free");
  // const [selectedTicketCategory, setSelectedTicketCategory] = useState('gold');
  const [isPaidTicketModalOpen, setPaidTicketModalOpen] = useState(false);
  const [isFreeTicketModalOpen, setFreeTicketModalOpen] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState("paid");
  const [ticketName, setTicketName] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [paidTickets, setPaidTickets] = useState([]);
  const [freeTickets, setFreeTickets] = useState([]);
  const [datePreview, setDatePreview] = useState("");
  const [timePreview, setTimePreview] = useState("");
  const [locationPreview, setLocationPreview] = useState("");
  const [catEventPreview, setCatEventPreview] = useState("");
  const [banner, setBanner] = useState("");


  const handleTabChange = (index) => {
    if (index === 0) {
      setSelectedTicketType("paid");
    } else if (index === 1) {
      setSelectedTicketType("free");
    }
  };

  const openPaidTicketModal = () => {
    setPaidTicketModalOpen(true);
    setSelectedTicketType("paid");
    setTicketName("");
    setTicketQuantity("");
    setTicketPrice("");
  };

  const openFreeTicketModal = () => {
    setFreeTicketModalOpen(true);
    setSelectedTicketType("free");
    setTicketName("");
    setTicketQuantity("");
  };

  const closePaidTicketModal = () => {
    setPaidTicketModalOpen(false);
  };

  const closeFreeTicketModal = () => {
    setFreeTicketModalOpen(false);
  };

  // const handleSaveCategory = () => {
  //   // Handle save func

  // };

  const handleBannerUpload = () => {
    // handle save banner
    console.log("Add Banner:", {
      banner:banner
    });
  };

  const handleLogoUpload = () => {
    //handle save logo
  };

  // const handleSaveDate = () => {};

  // const handleSaveTime = () => {
  //   // Handle save func
  // };

  // const handleSaveLocation = () => {};

  const handleSaveCategory = () => {
    // Handle save category logic
    const preview = `${selectedFormat}, ${selectedTopic}, ${tags}`;
    setCatEventPreview(preview);
    console.log("Added Category Event: ", {
      format: selectedFormat,
      topic: selectedTopic,
      tags: tags,
    });
  };

  const handleSaveDate = () => {
    // Handle save date  func
    const preview = `${startDate} - ${endDate}`;
    setDatePreview(preview);
    console.log("Added Date: ", {
      startDate: startDate,
      endDate: endDate,
    });
  };
  
  const handleSaveTime = () => {
    // Handle save time func
    const preview = `${startTime} - ${endTime}`;
    setTimePreview(preview);
    console.log("Added Time: ", {
      startTime: startTime,
      endTime: endTime,
    });
  };
  
  const handleSaveLocation = () => {
    const preview = `${placeName}, ${address}, ${city}`;
    setLocationPreview(preview);
    console.log("Added Location: ", {
      placeName: placeName,
      address: address,
      city: city,
    });
  };

  const handleAddTicketPaid = () => {
    // Handle adding a ticket func
    const isTicketValid = ticketName && ticketQuantity && ticketPrice;

    if (isTicketValid) {
      const newPaidTicket = {
        name: ticketName,
        quantity: ticketQuantity,
        price: ticketPrice,
        type: selectedTicketType,
      };

      setPaidTickets([...paidTickets, newPaidTicket]);
      setTicketName("");
      setTicketQuantity("");
      setTicketPrice("");
    }
  };

  const handleAddTicketFree = () => {
    // Handle ticket func
    const isTicketValid = ticketName && ticketQuantity;

    if (isTicketValid) {
      const newFreeTicket = {
        name: ticketName,
        quantity: ticketQuantity,
        type: selectedTicketType,
      };

      setFreeTickets([...freeTickets, newFreeTicket]);
      setTicketName("");
      setTicketQuantity("");
    }
  };

  const handleCreateEvent = () => {
    const event = {
      eventName: eventName,
      eventCategory: {
        eventFormat: selectedFormat,
        eventTopic: selectedTopic,
      },
      eventDateAndTime: {
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
      },
      eventLocation: {
        placeName: placeName,
        address: address,
        city: city,
      },
      paidTickets: paidTickets,
      freeTickets: freeTickets,
      eventDescription: eventDescription,
    };

    console.log("Event created:", event);
  };

  return (
    <Layout>
      <Box
        boxSize={{ base: "60%", lg:"100%", xl: "60%" }}
        // p={{ base: 2, md: 4, xl: 2 }}
        display="flex"
        w={{ base: "100%", md: "100%", xl: "100%" }}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box
          borderWidth={"1px"}
          borderColor={"gray.300"}
          margin={"auto"}
          borderRadius={"4%"}
        >
          <Box
            w="100%"
            h="420px"
            // borderWidth="1px"
            borderColor="gray.300"
            borderRadius="4%"
            // borderTop={"10%"}
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
                border={"2px"}
                bg="transparent"
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
              w="100%"
              h="100%"
              position="absolute"
              zIndex="-1"
              borderTop={"3%"}
              borderRadius={"5%"}
              borderBottomRadius={0}
            />
            <Text fontSize="24px" color="white">
              Upload images/posters/banners
            </Text>
            <Text fontSize="15px" color="white">
              Recommended 724 x 340px and no more than 2Mb
            </Text>
          </Box>

          <Box w="100%" p={4} paddingLeft={"65px"} paddingBottom={"40px"}>
            <FormControl>
              <FormControl>
                <Input
                  focusBorderColor="transparent"
                  outline={"none"}
                  bg={"transparent"}
                  type="text"
                  placeholder="Event Name*"
                  // fontSize={"25px"}
                  fontSize={24}
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  borderWidth="0 0 0 0"
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
              <Text mb={4}>{catEventPreview}</Text>
            </FormControl>

            <Box
              display={{ base: "block", sm: "flex", md: "flex" }}
              flexDirection={{ base: "column", sm: "column", md: "row" }}
            >
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
                      bg="gray.400"
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
                    focusBorderColor="transparent"
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
                  <BsCalendar2DateFill
                    size={30}
                    style={{ marginRight: "8px" }}
                  />
                  <Button
                    onClick={() => setIsDateTimeModalOpen(true)}
                    bg={"white"}
                    _hover={"white"}
                  >
                    Select Date & Time
                  </Button>
                </Box>
                {(
                  <Box mb={4}>
                    <Text>{datePreview}</Text>
                    <Text>{timePreview}</Text>
                  </Box>
                )}
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
                  <Text>{locationPreview}</Text>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          paddingTop={"25px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Tabs
            isLazy
            onChange={handleTabChange}
            alignItems="center"
            w={{ base: "100%", sm: "100%", md: "100%" }}
            display="flex"
            flexDirection="column"
          >
            <TabList justifyContent="center" alignItems={"center"}>
              <Tab
                _selected={{
                  borderBottom: "3px solid blue",
                  paddingX: "100px",
                  width: "300px",
                }}
              >
                TICKET CATEGORY
              </Tab>
              <Tab
                _selected={{
                  borderBottom: "3px solid blue",
                  paddingX: "100px",
                  width: "300px",
                }}
              >
                EVENT DESCRIPTION
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormControl pb={0} w="100%" justifyContent={"center"}>
                  <Button onClick={openPaidTicketModal}>Add Paid Ticket</Button>
                  <Button onClick={openFreeTicketModal}>Add Free Ticket</Button>
                </FormControl>
              </TabPanel>
              <TabPanel>
                <FormControl pb={0} w="100%" justifyContent={"center"}>
                  <Textarea
                    placeholder="Event Description"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                  />
                </FormControl>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Button colorScheme="blue" mt={6} onClick={handleCreateEvent}>
            Create Event
          </Button>

          <Modal isOpen={isPaidTicketModalOpen} onClose={closePaidTicketModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Paid Ticket</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <Input
                    placeholder="Ticket Name"
                    value={ticketName}
                    onChange={(e) => setTicketName(e.target.value)}
                  />
                  <Input
                    placeholder="Quantity"
                    value={ticketQuantity}
                    onChange={(e) => setTicketQuantity(e.target.value)}
                  />
                  <Input
                    placeholder="Price"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleAddTicketPaid}>
                  Save
                </Button>
                <Button onClick={closePaidTicketModal}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isFreeTicketModalOpen} onClose={closeFreeTicketModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Free Ticket</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <Input
                    placeholder="Ticket Name"
                    value={ticketName}
                    onChange={(e) => setTicketName(e.target.value)}
                  />
                  <Input
                    placeholder="Quantity"
                    value={ticketQuantity}
                    onChange={(e) => setTicketQuantity(e.target.value)}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleAddTicketFree}>
                  Save
                </Button>
                <Button onClick={closeFreeTicketModal}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
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
              <Input
                type="text"
                placeholder="Enter place name"
                value={placeName}
                onChange={(e) => setPlaceName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
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
