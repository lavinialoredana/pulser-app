import React from "react";
import PulserMessages from "../../components/PulserMessages";
import "./PulserFeed.css";
import { mockedDataArray } from "../../utils/mockedData";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const PulserFeed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/pulserfeed/messages"
        );
        if (response.status === 200) {
          const jsonResponse = await response.json();
          setData(jsonResponse);
        } else {
          // in case no data is received from server
          setData(undefined);
        }
      } catch (error) {
        console.log(error);
        setData(undefined);
        throw new Error(error);
      }
    };
    fetchData();
  });

  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  

  return (
    <div className="Pulser-feed">
      <header className="Pulser-feed-header" data-testid="pulser-feed">
        <h1> Pulser Feed</h1>
      </header>
      <PulserMessages feedData={mockedDataArray} />
      <Button
        onClickButton={handleButtonClick}
        buttonName="Back to landing"
        isDisabled={()=>false}
      />
    </div>
  );
};

export default PulserFeed;
