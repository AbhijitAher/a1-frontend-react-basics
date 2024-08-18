import { Button } from "antd";
import Search from "antd/es/input/Search";
import axios from "axios";
import React from "react";

export default function SearchSection({ peopleData, setPeopleData }) {
  // Partial or complete text search - Done
  // Input box - Done
  // Search button - Done
  const handleGetData = async (value, _e, info) => {
    try {
      let data = await axios.get(
        value.includes("https")
          ? value
          : `https://swapi.dev/api/people/?search=${value}`
      );
      console.log(data)
      if (data.status == 200 && data.data) {
        setPeopleData(data.data);
      } else {
        setPeopleData(false);
      }
    } catch (error) {
      console.log(error);
      setPeopleData(false);
    }
  };

  const handlePrev = () => {
    handleGetData(peopleData?.previous);
  };
  const handleNext = () => {
    handleGetData(peopleData?.next);
  };
  return (
    <div>
      <Search
        placeholder="input search text"
        style={{
          width: 304,
        }}
        onSearch={handleGetData}
        enterButton
      />
      {peopleData && (
        <Button disabled={!peopleData?.previous} onClick={handlePrev}>
          Prev
        </Button>
      )}
      {peopleData && (
        <Button disabled={!peopleData?.next} onClick={handleNext}>
          Next
        </Button>
      )}
    </div>
  );
}
