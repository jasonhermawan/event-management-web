import React, { useEffect, useState } from "react";
import "./eventPage.css";
import Layout from "../../Layout";
import axios from "axios";
import EventCard from "../../components/EventCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TicketCategory from "../../components/TicketCategory";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import convertDate from "../../convertFnc";
import TicketList from "../../components/TicketList";

const EventPage = () => {
  const token = localStorage.getItem("TOKEN")
  const search = useLocation();
  const [role, setRole] = useState("")
  const params = useParams();
  const [eventList, setEventList] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventPromotor, setEventPromotor] = useState("");
  const [eventBanner, setEventBanner] = useState("");
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [tickets, setTickets] = useState([])
  const navigate = useNavigate();

  if (token) {
    const getRole = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/accounts/role`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRole(response.data.role)
    }
  
    useEffect(() => {
      getRole();
    }, [])
  }

  const getEventDetail = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events?id=${params.eventid}`
      );
      setTickets(response.data[0].tickets)
      setDescription(response.data[0].description)
      setStartDate(response.data[0].startDate)
      setEndDate(response.data[0].endDate)
      setStartTime(response.data[0].startTime)
      setEndTime(response.data[0].endTime)
      setLocation(response.data[0].location)
      setEventName(response.data[0].name);
      setEventPromotor(response.data[0].account.username);
      setEventBanner(`${import.meta.env.VITE_API_URL}/public/events/${
        response.data[0].banners[0].image
      }`);
    } catch (error) {
      console.log(error);
    }
  };

  const getEvent = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events`
      );
      setEventList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventDetail();
    getEvent();
  }, []);

  const printEventList = () => {
    return eventList.map((val) => {
      return (
        <EventCard
          onclick={() => {
            navigate(`/event/${val.name}/${val.id}`);
            getEventDetail();
          }}
          eventImage={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          eventTitle={val.name}
          eventDate={
            val.startDate === val.endDate ? `${convertDate((val.startDate).slice(0, 10))}` : `${convertDate((val.startDate).slice(0, 10))} - ${convertDate((val.endDate).slice(0, 10))}`
          }
          eventPrice={`Rp ${(val.tickets[0].price).toLocaleString("id")}`}
          promotor={val.account.username}
        />
      );
    });
  };

  useEffect(() => {
    getEventDetail();
  }, [search]);

  const printTickets = () => {
    return tickets.map((val) => {
      return (
        <TicketList ticketName={val.name} ticketPrice={(val.price).toLocaleString("id")} />
      )
    })
  }

  return (
    <Layout>
      <div className="layouting page-padding">
        <div id="top-section">
          <div id="event-banner">
            <img src={eventBanner} alt="" />
          </div>
          <div id="event-detail">
            <div id="event-info">
              <h1>{eventName}</h1>
              <div className="info-section">
                <i class="fa-solid fa-calendar-days"></i>
                <p>{
                  startDate === endDate ? `${convertDate((startDate).slice(0, 10))}` : `${convertDate((startDate).slice(0, 10))} - ${convertDate((endDate).slice(0, 10))}`}
                </p>
              </div>
              <div className="info-section">
                <i class="fa-solid fa-clock"></i>
                <p>{startTime} - {endTime}</p>
              </div>
              <div className="info-section">
                <i class="fa-solid fa-location-dot"></i>
                <p>{location}</p>
              </div>
            </div>
            <div id="promotor-section">
              <p>Event by</p>
              <h3>{eventPromotor}</h3>
            </div>
          </div>
        </div>
        <div id="mid-section">
          <div id="event-desc">
            <p>
             {description}
            </p>
          </div>
          <div id="event-cart">
            <div id="cart-card">
              <h3>Ticket Category</h3>
              {printTickets()}
              <button
                onClick={() => {role === "promotor" ? navigate("/404") : !role ? navigate("/signin") : navigate("/checkout")}}
                style={role === "promotor" ? {cursor: "not-allowed"} : {cursor: "pointer"}}
                disabled={role === "promotor" ? true : false}
              >
                Choose ticket
              </button>
            </div>
          </div>
          <div id="mobile-tab">
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Description</Tab>
                <Tab>Tickets</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div id="mobile-desc">
                    <p>
                     {description}
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div id="mobile-tickets">
                    {printTickets()}
                    <button
                      onClick={() => {role === "promotor" ? navigate("/404") : !role ? navigate("/signin") : navigate("/checkout")}}
                      style={{ cursor: "pointer" }}
                    >
                      Choose Ticket
                    </button>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
        <div id="explore-more-events" style={{ marginTop: "70px" }}>
          <h1>Explore other events</h1>
          <div className="event-cards" style={{ marginTop: "20px" }}>
            {printEventList()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventPage;
