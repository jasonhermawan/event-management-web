import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import "./promotorPage.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";
import EventCard from "../../components/EventCard";
import convertDate from "../../convertFnc";

const PromotorPage = () => {
  const navigate = useNavigate()
  const params = useParams();
  const [ongoing, setOngoing] = useState([]);
  const [past, setPast] = useState([]);

  const getOngoingEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events/all?accountid=${params.id}`
      );
      setOngoing(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPastEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events/past?accountid=${params.id}`
      )
      setPast(response.data)
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    getOngoingEvents();
    getPastEvents()
  }, []);

  const printOngoing = () => {
    return ongoing.map((val) => {
      return (
        <EventCard
          onclick={() => navigate(`/event/${val.name}/${val.id}`)}
          eventImage={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          eventTitle={val.name}
          eventDate={
            val.startDate === val.endDate
              ? `${convertDate(val.startDate.slice(0, 10))}`
              : `${convertDate(val.startDate.slice(0, 10))} - ${convertDate(
                  val.endDate.slice(0, 10)
                )}`
          }
          eventPrice={`Rp ${val.tickets[0].price.toLocaleString("id")}`}
          promotor={val.account.username}
        />
      );
    });
  };

  const printPast = () => {
    return past.map((val) => {
      return (
        <EventCard
          eventImage={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          eventTitle={val.name}
          eventDate={
            val.startDate === val.endDate
              ? `${convertDate(val.startDate.slice(0, 10))}`
              : `${convertDate(val.startDate.slice(0, 10))} - ${convertDate(
                  val.endDate.slice(0, 10)
                )}`
          }
          eventPrice={`Rp ${val.tickets[0].price.toLocaleString("id")}`}
          promotor={val.account.username}
        />
      );
    });
  };

  return (
    <Layout>
      <div id="promotor-page">
        <div id="promotor-detail">
          <Avatar size="lg" src="https://bit.ly/broken-link" />
          <h1 className="promotor-profile-name">{params.name}</h1>
          <h3>{(ongoing.length) + (past.length)} Total events</h3>
        </div>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Ongoing Events {`(${ongoing.length})`}</Tab>
            <Tab>Past Events {`(${past.length})`}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="events-container">
                {ongoing.length ? printOngoing() : "No events"}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="events-container">
                {past.length ? printPast() : "No events"}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PromotorPage;
