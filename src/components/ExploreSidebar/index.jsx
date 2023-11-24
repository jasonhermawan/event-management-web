import React, { useEffect, useState } from "react";
import "./exploreSidebar.css";
import ExploreDropdown from "../ExploreDropdown";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const ExploreSidebar = (props) => {
  const search = useLocation().search;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [locationClick, setLocationClick] = useState(false);
  const [locationResult, setLocationResult] = useState("");
  const [locationList, setLocationList] = useState([])
  const [selectedLocationName, setSelectedLocationName] = useState("")

  const [dateClick, setDateClick] = useState(false);
  const [dateResult, setDateResult] = useState("");

  const [formatClick, setFormatClick] = useState(false);
  const [formatResult, setFormatResult] = useState("");
  const [formatList, setFormatList] = useState([]);
  const [selectedFormatName, setSelectedFormatName] = useState("")

  const [topicClick, setTopicClick] = useState(false);
  const [topicResult, setTopicResult] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [selectedTopicName, setSelectedTopicName] = useState("")

  const getLocationList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cities`);
    setLocationList(response.data)
  }

  const getFormatList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/formats`);
    setFormatList(response.data);
  };

  const getTopicList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/topics`);
    setTopicList(response.data);
  };

  useEffect(() => {
    getLocationList();
    getFormatList();
    getTopicList();
  }, []);

  const printDropdownLocation = () => {
    return locationList.map((val) => {
      return (
        <div className="filter-result">
          <ExploreDropdown
            onclick={() => {
              setLocationClick(false);
              setLocationResult(`${val.city}`);
              {!search ? navigate(`/explore?cityid=${val.id}`) : navigate(`/explore${search}&cityid=${val.id}`)}
            }}
            text={val.city}
          />
        </div>
      );
    });
  };

  const getLocationName = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cities?id=${searchParams.get("cityid")}`)
    setSelectedLocationName(response.data[0].city)
  }

  useEffect(() => {
    getLocationName()
  }, [search])

  const printLocationResult = () => {
    return (
      <div className="filter-selected">
        <h3>{selectedLocationName}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setLocationResult("");
            searchParams.delete("cityid");setSearchParams(searchParams);
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

  const printDropdownFormat = () => {
    return formatList.map((val) => {
      return (
        <div className="filter-result">
          <ExploreDropdown
            onclick={() => {
              setFormatClick(false);
              setFormatResult(`${val.format}`);
              {!search ? navigate(`/explore?formatid=${val.id}`) : navigate(`/explore${search}&formatid=${val.id}`)}
            }}
            text={val.format}
          />
        </div>
      );
    });
  };

  const getFormatName = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/formats?id=${searchParams.get("formatid")}`)
    setSelectedFormatName(response.data[0].format)
  }

  useEffect(() => {
    getFormatName()
  }, [search])

  const printFormatResult = () => {
    return (
      <div className="filter-selected">
        <h3>{selectedFormatName}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setFormatResult("");
            searchParams.delete("formatid");setSearchParams(searchParams);
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
              setTopicClick(false);
              setTopicResult(`${val.topic}`);
              {!search ? navigate(`/explore?topicid=${val.id}`) : navigate(`/explore${search}&topicid=${val.id}`)}
            }}
            text={val.topic}
          />
        </div>
      );
    });
  };

  const getTopicName = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/topics?id=${searchParams.get("topicid")}`)
    setSelectedTopicName(response.data[0].topic)
  }

  useEffect(() => {
    getTopicName()
  }, [search])

  const printTopicResult = () => {
    return (
      <div className="filter-selected">
        <h3>{selectedTopicName}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setTopicResult("");
            searchParams.delete("topicid");setSearchParams(searchParams);
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
            {search.includes("cityid=") ? (
              ""
            ) : (
              <i
                class="bx bx-chevron-down"
                onClick={() => setLocationClick(!locationClick)}
              ></i>
            )}
          </div>
          {locationClick && !locationResult ? printDropdownLocation() : ""}
          {search.includes("cityid=") ? printLocationResult() : ""}
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
          {search.includes("date=") ? printDateResult() : ""}
        </div>

        <hr className="sidebar-divider" />

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3 style={formatClick ? { color: "black" } : { color: "black" }}>
              Format
            </h3>
            {search.includes("formatid=") ? (
              ""
            ) : (
              <i
                class="bx bx-chevron-down"
                onClick={() => setFormatClick(!formatClick)}
              ></i>
            )}
          </div>
          {formatClick && !formatResult ? printDropdownFormat() : ""}
          {search.includes("formatid=") ? printFormatResult() : ""}
        </div>

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3 style={topicClick ? { color: "black" } : { color: "black" }}>
              Topic
            </h3>
            {search.includes("topicid=") ? (
              ""
            ) : (
              <i
                class="bx bx-chevron-down"
                onClick={() => setTopicClick(!topicClick)}
              ></i>
            )}
          </div>
          {topicClick && !topicResult ? printDropdownTopic() : ""}
          {search.includes("topicid=") ? printTopicResult() : ""}
        </div>
      </div>
    </div>
  );
};

export default ExploreSidebar;