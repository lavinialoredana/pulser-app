import React from "react";
import happyFace from "../../assets/images/happy_face.png";
import "./PulserMessage.css";

const PulserMessage = () => {
  return (
    <div className="Pulser-message-container">
      <div className="Title-image-reaction-container">
        <div className="Reaction-title" data-testid="reaction-title">
          <h3> Happy</h3>
        </div>
        <div>
          <img src={happyFace} alt="happy_face" className="Reaction-image" />
        </div>
      </div>

      <div className="Reaction-message" data-testid="reaction-message">
        <p>First message</p>
      </div>
    </div>
  );
};

export default PulserMessage;
