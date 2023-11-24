import React, { useEffect, useState } from "react";
import "./eventPage.css";
import Layout from "../../Layout";
import axios from "axios";
import EventCard from "../../components/EventCard";
import { useNavigate, useParams } from "react-router-dom";
import TicketCategory from "../../components/TicketCategory";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const EventPage = () => {
  const params = useParams();
  const [eventList, setEventList] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventPromotor, setEventPromotor] = useState("");
  const [eventBanner, setEventBanner] = useState("");
  const navigate = useNavigate();

  const getEventDetail = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/events?id=${params.eventid}`
      );
      setEventName(response.data[0].name);
      setEventPromotor(response.data[0].account.username);
      setEventBanner(response.data[0].banner);
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
          eventImage={val.banner}
          eventTitle={val.name}
          eventDate={(val.date).slice(0, 10)}
          eventPrice={`Rp ${(val.price).toLocaleString("id")}`}
          promotor={val.account.username}
        />
      );
    });
  };

  useEffect(() => {
    getEventDetail();
  }, [printEventList]);

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
                <p>28 Oct 2023</p>
              </div>
              <div className="info-section">
                <i class="fa-solid fa-clock"></i>
                <p>15:00 - 23:00 WIB</p>
              </div>
              <div className="info-section">
                <i class="fa-solid fa-location-dot"></i>
                <p>Community Park PIK 2, Banten</p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              tempora ut repudiandae doloremque dolore temporibus commodi
              sapiente facilis odio repellat cumque explicabo aliquam harum,
              molestias quis quidem totam incidunt eligendi dolorum a modi
              excepturi. Quas esse deserunt sit rerum ut saepe dolore commodi
              qui, sed minima! Tempore, odio officiis perferendis necessitatibus
              ab deleniti atque aut molestiae itaque? Exercitationem consequatur
              magni quis perspiciatis non molestias odio quasi dolorem maiores
              doloribus id rem itaque iste similique eius suscipit, voluptas,
              natus vitae, qui doloremque beatae modi libero! Ab dolores
              molestias accusantium alias harum eius odit similique, quibusdam
              maxime quidem, cumque sequi dolor, laboriosam dolore corporis cum
              ipsum nemo soluta error! Rem doloribus similique vero tenetur quis
              quos, cumque veritatis numquam nobis amet possimus perferendis
              nesciunt mollitia neque vel distinctio laudantium quia? Nostrum ea
              quaerat vero et obcaecati rem nemo illum ipsam saepe labore
              blanditiis autem cumque omnis perferendis, dicta eos quasi. Neque
              itaque, ipsa nostrum laboriosam modi consequatur commodi
              doloremque aliquam qui, quos at possimus sapiente illum soluta vel
              porro labore fuga sit omnis minus! Eveniet tempora aliquam illo,
              exercitationem quaerat sint modi, debitis dolorum ipsum sapiente
              doloremque. Corrupti temporibus natus beatae commodi, voluptate
              cumque voluptatem. Aliquid ullam maxime tenetur tempora a
              voluptates et illum quis dicta, unde, veritatis eos itaque
              explicabo consequatur dolores? Neque sapiente sit animi suscipit
              ea commodi quae perspiciatis quasi ipsa architecto illum eum,
              placeat facilis voluptatem accusantium nulla at aliquid error quo
              libero? Vel minus possimus quasi vitae neque non nobis, dolor
              odit? Eligendi laudantium at sit nihil possimus quos tenetur,
              numquam natus labore commodi quibusdam, expedita assumenda ex quo
              accusantium unde temporibus, doloremque aliquam officiis
              perferendis nisi nemo odio. Nihil culpa, vitae nemo iste dolore
              aperiam labore odio voluptatum, laudantium quas, quisquam sint
              dolorum eius? Accusamus nemo vel illum perspiciatis temporibus
              delectus quasi doloribus, voluptatem, rerum corporis ea modi
              dignissimos, consectetur facere vitae. Numquam necessitatibus
              reiciendis sunt, id quia fuga eligendi voluptatum magnam
              consequatur repudiandae omnis veritatis modi cupiditate unde,
              laborum harum recusandae? Veritatis nam, commodi error nisi, amet
              labore nulla aliquam dolore dignissimos ipsum, maxime veniam.
              Facilis esse soluta iusto saepe. Qui debitis voluptatibus
              officiis? At, corporis possimus! Exercitationem illo praesentium
              alias provident recusandae, ut molestiae sequi cum fugiat aliquid
              sunt ducimus possimus accusantium facilis sit ratione nobis ipsa
              facere eligendi quibusdam error odit, officiis numquam
              perferendis. Illum minima sapiente, non officiis quas ratione
              minus id voluptates. Animi laboriosam ut rerum, iure illum minus
              cumque blanditiis iusto, aut et nesciunt enim, debitis maxime!
              Fuga, inventore nisi! Nam aspernatur atque ducimus soluta
              dignissimos, repellat quam facilis totam numquam consectetur aut
              deleniti iure expedita cumque delectus ipsa incidunt fugiat culpa
              nisi corrupti! Consequuntur, voluptate. Molestiae veritatis, iusto
              veniam labore dolorum id asperiores illum voluptate quidem vero at
              delectus earum, animi tempore mollitia a natus praesentium harum,
              ut ducimus odit in nihil? Commodi totam repudiandae fugiat fugit
              id dignissimos quasi consequatur sapiente tenetur cupiditate
              laboriosam molestias nesciunt expedita saepe sit ut nulla
              similique delectus aliquam velit, enim odit nostrum nisi. Aperiam
              numquam tempore ipsum voluptate obcaecati quod, pariatur corrupti!
            </p>
          </div>
          <div id="event-cart">
            <div id="cart-card">
              <h3>Ticket Category</h3>
              <TicketCategory ticketName="Silver" ticketPrice="Rp 25.000" />
              <TicketCategory ticketName="Gold" ticketPrice="Rp 50.000" />
              <TicketCategory ticketName="Platinum" ticketPrice="Rp 100.000" />
              <button
                onClick={() => navigate("/checkout")}
                style={{ cursor: "pointer" }}
              >
                Buy Ticket
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia tempora ut repudiandae doloremque dolore
                      temporibus commodi sapiente facilis odio repellat cumque
                      explicabo aliquam harum, molestias quis quidem totam
                      incidunt eligendi dolorum a modi excepturi. Quas esse
                      deserunt sit rerum ut saepe dolore commodi qui, sed
                      minima! Tempore, odio officiis perferendis necessitatibus
                      ab deleniti atque aut molestiae itaque? Exercitationem
                      consequatur magni quis perspiciatis non molestias odio
                      quasi dolorem maiores doloribus id rem itaque iste
                      similique eius suscipit, voluptas, natus vitae, qui
                      doloremque beatae modi libero! Ab dolores molestias
                      accusantium alias harum eius odit similique, quibusdam
                      maxime quidem, cumque sequi dolor, laboriosam dolore
                      corporis cum ipsum nemo soluta error! Rem doloribus
                      similique vero tenetur quis quos, cumque veritatis numquam
                      nobis amet possimus perferendis nesciunt mollitia neque
                      vel distinctio laudantium quia? Nostrum ea quaerat vero et
                      obcaecati rem nemo illum ipsam saepe labore blanditiis
                      autem cumque omnis perferendis, dicta eos quasi. Neque
                      itaque, ipsa nostrum laboriosam modi consequatur commodi
                      doloremque aliquam qui, quos at possimus sapiente illum
                      soluta vel porro labore fuga sit omnis minus! Eveniet
                      tempora aliquam illo, exercitationem quaerat sint modi,
                      debitis dolorum ipsum sapiente doloremque. Corrupti
                      temporibus natus beatae commodi, voluptate cumque
                      voluptatem. Aliquid ullam maxime tenetur tempora a
                      voluptates et illum quis dicta, unde, veritatis eos itaque
                      explicabo consequatur dolores? Neque sapiente sit animi
                      suscipit ea commodi quae perspiciatis quasi ipsa
                      architecto illum eum, placeat facilis voluptatem
                      accusantium nulla at aliquid error quo libero? Vel minus
                      possimus quasi vitae neque non nobis, dolor odit? Eligendi
                      laudantium at sit nihil possimus quos tenetur, numquam
                      natus labore commodi quibusdam, expedita assumenda ex quo
                      accusantium unde temporibus, doloremque aliquam officiis
                      perferendis nisi nemo odio. Nihil culpa, vitae nemo iste
                      dolore aperiam labore odio voluptatum, laudantium quas,
                      quisquam sint dolorum eius? Accusamus nemo vel illum
                      perspiciatis temporibus delectus quasi doloribus,
                      voluptatem, rerum corporis ea modi dignissimos,
                      consectetur facere vitae. Numquam necessitatibus
                      reiciendis sunt, id quia fuga eligendi voluptatum magnam
                      consequatur repudiandae omnis veritatis modi cupiditate
                      unde, laborum harum recusandae? Veritatis nam, commodi
                      error nisi, amet labore nulla aliquam dolore dignissimos
                      ipsum, maxime veniam. Facilis esse soluta iusto saepe. Qui
                      debitis voluptatibus officiis? At, corporis possimus!
                      Exercitationem illo praesentium alias provident
                      recusandae, ut molestiae sequi cum fugiat aliquid sunt
                      ducimus possimus accusantium facilis sit ratione nobis
                      ipsa facere eligendi quibusdam error odit, officiis
                      numquam perferendis. Illum minima sapiente, non officiis
                      quas ratione minus id voluptates. Animi laboriosam ut
                      rerum, iure illum minus cumque blanditiis iusto, aut et
                      nesciunt enim, debitis maxime! Fuga, inventore nisi! Nam
                      aspernatur atque ducimus soluta dignissimos, repellat quam
                      facilis totam numquam consectetur aut deleniti iure
                      expedita cumque delectus ipsa incidunt fugiat culpa nisi
                      corrupti! Consequuntur, voluptate. Molestiae veritatis,
                      iusto veniam labore dolorum id asperiores illum voluptate
                      quidem vero at delectus earum, animi tempore mollitia a
                      natus praesentium harum, ut ducimus odit in nihil? Commodi
                      totam repudiandae fugiat fugit id dignissimos quasi
                      consequatur sapiente tenetur cupiditate laboriosam
                      molestias nesciunt expedita saepe sit ut nulla similique
                      delectus aliquam velit, enim odit nostrum nisi. Aperiam
                      numquam tempore ipsum voluptate obcaecati quod, pariatur
                      corrupti!
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div id="mobile-tickets">
                    <TicketCategory
                      ticketName="Silver"
                      ticketPrice="Rp 25.000"
                    />
                    <TicketCategory ticketName="Gold" ticketPrice="Rp 50.000" />
                    <TicketCategory
                      ticketName="Platinum"
                      ticketPrice="Rp 100.000"
                    />
                    <button
                      onClick={() => navigate("/checkout")}
                      style={{ cursor: "pointer" }}
                    >
                      Buy Ticket
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
