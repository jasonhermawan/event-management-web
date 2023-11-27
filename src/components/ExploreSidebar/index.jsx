import React, { useEffect, useState } from "react";
import "./exploreSidebar.css";
import ExploreDropdown from "../ExploreDropdown";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import SortDropdown from "../SortDropdown";

const ExploreSidebar = (props) => {
  const search = useLocation().search;
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();

  const [locationClick, setLocationClick] = useState(false);
  const [locationResult, setLocationResult] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [selectedLocationName, setSelectedLocationName] = useState("");

  const [typeClick, setTypeClick] = useState(false);
  const [typeResult, setTypeResult] = useState("");

  const [formatClick, setFormatClick] = useState(false);
  const [formatResult, setFormatResult] = useState("");
  const [formatList, setFormatList] = useState([]);
  const [selectedFormatName, setSelectedFormatName] = useState("");

  const [topicClick, setTopicClick] = useState(false);
  const [topicResult, setTopicResult] = useState("");
  const [topicList, setTopicList] = useState([]);
  const [selectedTopicName, setSelectedTopicName] = useState("");

  const [sortClick, setSortClick] = useState(false);

  const getLocationList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cities`);
    setLocationList(response.data);
  };

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

  const printDropdownType = () => {
    return (
      <div className="filter-result">
        <ExploreDropdown
          onclick={() => {
            const pageNumber = searchParams.get("page")
            setTypeClick(false);
            setTypeResult(`Online`);
            {
              !search
                ? navigate(`/explore?type=online`)
                : navigate(`/explore${search.replaceAll(`${pageNumber}`, "1")}&type=online`);
            };
          }}
          text="Online"
        />
        <ExploreDropdown
          onclick={() => {
            const pageNumber = searchParams.get("page")
            setTypeClick(false);
            setTypeResult(`Offline`);
            {
              !search
                ? navigate(`/explore?type=offline`)
                : navigate(`/explore${search.replaceAll(`${pageNumber}`, "1")}&type=offline`);
            };
          }}
          text="Offline"
        />
      </div>
    );
  };

  const printTypeResult = () => {
    return (
      <div className="filter-selected">
        <h3>{`${searchParams.get("type")}`}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setTypeResult("");
            searchParams.delete("type");
            searchParams.delete("page");
            setSearchParams(searchParams);
          }}
        ></i>
      </div>
    );
  };

  const printDropdownLocation = () => {
    return locationList.map((val) => {
      if (val.city.toLowerCase() != "online") {
        return (
          <div className="filter-result">
            <ExploreDropdown
              onclick={() => {
                const pageNumber = searchParams.get("page")
                setLocationClick(false);
                setLocationResult(`${val.city}`);
                {
                  !search
                    ? navigate(`/explore?cityid=${val.id}`)
                    : navigate(`/explore${search.replaceAll(`${pageNumber}`, "1")}&cityid=${val.id}`);
                }
              }}
              text={val.city}
            />
          </div>
        );
      }
    });
  };

  const getLocationName = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/cities?id=${searchParams.get("cityid")}`
    );
    setSelectedLocationName(response.data[0].city);
  };

  useEffect(() => {
    getLocationName();
  }, [search]);

  const printLocationResult = () => {
    return (
      <div className="filter-selected">
        <h3>{selectedLocationName}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setLocationResult("");
            searchParams.delete("cityid");
            searchParams.delete("page");
            setSearchParams(searchParams);
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
              const pageNumber = searchParams.get("page")
              setFormatClick(false);
              setFormatResult(`${val.format}`);
              {
                !search
                  ? navigate(`/explore?formatid=${val.id}`)
                  : navigate(`/explore${search.replaceAll(`${pageNumber}`, "1")}&formatid=${val.id}`);
              }
            }}
            text={val.format}
          />
        </div>
      );
    });
  };

  const getFormatName = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/formats?id=${searchParams.get(
        "formatid"
      )}`
    );
    setSelectedFormatName(response.data[0].format);
  };

  useEffect(() => {
    getFormatName();
  }, [search]);

  const printFormatResult = () => {
    return (
      <div className="filter-selected">
        <h3>{selectedFormatName}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setFormatResult("");
            searchParams.delete("formatid");
            searchParams.delete("page");
            setSearchParams(searchParams);
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
              const pageNumber = searchParams.get("page")
              setTopicClick(false);
              setTopicResult(`${val.topic}`);
              {
                !search
                  ? navigate(`/explore?topicid=${val.id}`)
                  : navigate(`/explore${search.replaceAll(`${pageNumber}`, "1")}&topicid=${val.id}`);
              }
            }}
            text={val.topic}
          />
        </div>
      );
    });
  };

  const getTopicName = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/topics?id=${searchParams.get("topicid")}`
    );
    setSelectedTopicName(response.data[0].topic);
  };

  useEffect(() => {
    getTopicName();
  }, [search]);

  const printTopicResult = () => {
    return (
      <div className="filter-selected">
        <h3>{selectedTopicName}</h3>
        <i
          class="bx bx-x"
          onClick={() => {
            setTopicResult("");
            searchParams.delete("topicid");
            searchParams.delete("page");
            setSearchParams(searchParams);
          }}
        ></i>
      </div>
    );
  };

  const printSort = () => {
    if (sortClick) {
      return (
        <div className="sort-dropdown">
          <SortDropdown
            text="From closest date"
            onclick={() => {
              setSortClick(false);
              searchParams.set("sortby", "asc");
              setSearchParams(searchParams);
            }}
            active={searchParams.get("sortby") === "asc" ? "active-sort" : ""}
          />
          <SortDropdown
            text="From furthest date"
            onclick={() => {
              setSortClick(false);
              searchParams.set("sortby", "desc");
              setSearchParams(searchParams);
            }}
            active={searchParams.get("sortby") === "desc" ? "active-sort" : ""}
          />
        </div>
      );
    }
  };

  const printFilteringSection = () => {
    return (
      <div className="filtering-section">
        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3 style={locationClick ? { color: "black" } : { color: "black" }}>
              Type
            </h3>
            {search.includes("type=") ? (
              ""
            ) : (
              <i
                class="bx bx-chevron-down"
                onClick={() => setTypeClick(!typeClick)}
              ></i>
            )}
          </div>
          {typeClick && !typeResult ? printDropdownType() : ""}
          {search.includes("type=") ? printTypeResult() : ""}
        </div>

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
    );
  };

  const searchFilter = search.includes("type=") || search.includes("cityid=") || search.includes("formatid=") || search.includes("topicid=");

  useEffect(() => {
    setSortClick(false)
  }, [search])

  // useEffect(() => {
  //   searchParams.set("page", "1")
  //   setSearchParams(searchParams)
  // }, [searchParams.get("type")])

  return (
    <div id="explore-bar">
      <div id="desktop-bar">
        <div id="explore-topbar">
          <h1>Filter Event</h1>
        </div>
        <hr className="sidebar-divider-top" />
        {printFilteringSection()}
      </div>
      <div id="mobile-bar">
        <div id="bar-button-container">
          <div className="mobile-button-item">
            <button
              className="filter-btn-style"
              onClick={onOpen}
              style={{ color: searchFilter ? "#007aff" : "black" }}
            >
              Filter
            </button>
          </div>
          <div className="mobile-button-item">
            <button
              className="filter-btn-style"
              id="sort-button"
              onClick={() => setSortClick(!sortClick)}
            >
              Date
            </button>
            {printSort()}
          </div>
        </div>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Filter Event</DrawerHeader>
            <DrawerBody>{printFilteringSection()}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default ExploreSidebar;
