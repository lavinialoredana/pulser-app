import React from "react";
import PulserMessages from "../../components/PulserMessages";
import "./PulserFeed.css";
import { mockedDataArray } from "../../utils/mockedData";

const PulserFeed = () => {
  return (
    <div className="Pulser-feed">
      <header className="Pulser-feed-header" data-testid="pulser-feed">
        <h1> Pulser Feed</h1>
      </header>
      <PulserMessages feedData={mockedDataArray} />
    </div>
  );
};

export default PulserFeed;
