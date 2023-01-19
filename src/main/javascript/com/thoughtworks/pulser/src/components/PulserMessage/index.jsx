import React from "react";
import happyFace from "../../assets/images/happy_face.png";

const PulserMessage = () => {
  return (
    <div className="Pulser-message">
      <div className="Title-image-reaction">
        <div className="Reaction-title" data-testid="reaction-title">
          <span> Happy</span>
        </div>
        <div className="Reaction-image">
          <img src={happyFace} alt="happy_face" />
        </div>
      </div>
    </div>
  );
};

export default PulserMessage;
