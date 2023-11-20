import React, { useEffect, useState } from "react";
import "./exploreSidebar.css";
import ExploreDropdown from "../ExploreDropdown";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ExploreSidebar = (props) => {
  const search = useLocation().search;
  const [locationClick, setLocationClick] = useState(false);
  const [locationResult, setLocationResult] = useState("");
  const [dateClick, setDateClick] = useState(false);
  const [dateResult, setDateResult] = useState("");
  const [formatClick, setFormatClick] = useState(false);
  const [formatResult, setFormatResult] = useState("");
  const [formatList, setFormatList] = useState([])
  const [topicClick, setTopicClick] = useState(false);
  const [topicResult, setTopicResult] = useState("");
  const [topicList, setTopicList] = useState([])
  const navigate = useNavigate();

  const printDropdownLocation = () => {
    return (
      <div className="filter-result">
        <ExploreDropdown
          onclick={() => {
            navigate(`/explore?city=surabaya`);
            setLocationClick(false);
            setLocationResult("Surabaya");
          }}
          text="Surabaya"
        />
        <ExploreDropdown
          onclick={() => {
            navigate("/explore?city=jakarta");
            setLocationClick(false);
            setLocationResult("Jakarta");
          }}
          text="Jakarta"
        />
        <ExploreDropdown
          onclick={() => {
            navigate("/explore?city=bali");
            setLocationClick(false);
            setLocationResult("Bali");
          }}
          text="Bali"
        />
      </div>
    );
  };

  const printLocationResult = () => {
    return (
      <div className="filter-selected">
        <h3>{locationResult}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setLocationResult("");
            navigate("/explore?");
          }}
        ></i>
      </div>
    );
  };

  const printDropdownDate = () => {
    return (
      <div className="filter-result">
        <ExploreDropdown
          onclick={() => {
            navigate("/explore?city=surabaya");
            setLocationClick(false);
            setLocationResult("Surabaya");
          }}
          text="This Week"
        />
        <ExploreDropdown
          onclick={() => {
            navigate("/explore?city=jakarta");
            setLocationClick(false);
            setLocationResult("Jakarta");
          }}
          text="Next Week"
        />
        <ExploreDropdown
          onclick={() => {
            navigate("/explore?city=bali");
            setLocationClick(false);
            setLocationResult("Bali");
          }}
          text="This Month"
        />
      </div>
    );
  };

  const printDateResult = () => {
    return (
      <div className="filter-selected">
        <h3>{dateResult}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setDateResult("");
            navigate("/explore?");
          }}
        ></i>
      </div>
    );
  };

  const getFormatList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/formats`)
    setFormatList(response.data)
  }

  const getTopicList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/topics`)
    setTopicList(response.data)
  }

  useEffect(() => {
    getFormatList()
    getTopicList()
  }, [])

  const printDropdownFormat = () => {
    return formatList.map((val) => {
      return (
        <div className="filter-result">
          <ExploreDropdown
          onclick={() => {
            navigate(`/explore?formatid=${val.id}`);
            setFormatClick(false);
            setFormatResult(`${val.format}`);
          }}
          text={val.format}
        />
        </div>
      )
    })
  };

  const printFormatResult = () => {
    return (
      <div className="filter-selected">
        <h3>{formatResult}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setFormatResult("");
            navigate("/explore?");
          }}
        ></i>
      </div>
    );
  };

  const printDropdownTopic = () => {
    return topicList.map((val) => {
      return (
        <div className="filter-result">
          <ExploreDropdown
          onclick={() => {
            navigate(`/explore?topicid=${val.id}`);
            setTopicClick(false);
            setTopicResult(`${val.topic}`);
          }}
          text={val.topic}
        />
        </div>
      )
    })
  };

  const printTopicResult = () => {
    return (
      <div className="filter-selected">
        <h3>{topicResult}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setTopicResult("");
            navigate("/explore?");
          }}
        ></i>
      </div>
    );
  };

  return (
    <div id="explore-bar">
      <h1>Filter Event</h1>
      <hr className="sidebar-divider-top" />
      <div id="filtering-section">
        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3 style={locationClick ? { color: "black" } : { color: "black" }}>
              Location
            </h3>
            {locationResult ? (
              ""
            ) : (
              <i
                class="bx bx-chevron-down"
                onClick={() => setLocationClick(!locationClick)}
              ></i>
            )}
          </div>
          {locationClick && !locationResult ? printDropdownLocation() : ""}
          {locationResult ? printLocationResult() : ""}
        </div>

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3 style={dateClick ? { color: "black" } : { color: "black" }}>
              Date
            </h3>
            {dateResult ? (
              ""
            ) : (
              <i
                class="bx bx-chevron-down"
                onClick={() => setDateClick(!dateClick)}
              ></i>
            )}
          </div>
          {dateClick && !dateResult ? printDropdownDate() : ""}
          {dateResult ? printDateResult() : ""}
        </div>

        <hr className="sidebar-divider" />

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3 style={formatClick ? { color: "black" } : { color: "black" }}>
              Format
            </h3>
            {formatResult ? (
              ""
            ) : (
              <i
                class="bx bx-chevron-down"
                onClick={() => setFormatClick(!formatClick)}
              ></i>
            )}
          </div>
          {formatClick && !formatResult ? printDropdownFormat() : ""}
          {formatResult ? printFormatResult() : ""}
        </div>

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3 style={topicClick ? { color: "black" } : { color: "black" }}>Topic</h3>
            <i class="bx bx-chevron-down" onClick={() => setTopicClick(!topicClick)}></i>
          </div>
          {topicClick && !topicResult ? printDropdownTopic() : ""}
          {topicResult ? printTopicResult() : ""}
        </div>
      </div>
    </div>
  );
};

export default ExploreSidebar;
