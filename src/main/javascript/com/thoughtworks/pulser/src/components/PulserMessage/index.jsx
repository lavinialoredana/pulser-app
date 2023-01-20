import React from "react";
import "./PulserMessage.css";

const PulserMessage = ({
  reactionTitle,
  reactionFace,
  reactionFaceAlt,
  feedbackMessage,
}) => {
  return (
    <div className="Pulser-message-container">
      <div className="Title-image-reaction-container">
        <div className="Reaction-title" data-testid="reaction-title">
          <h3> {reactionTitle}</h3>
        </div>
        <div>
          <img
            src={reactionFace}
            alt={reactionFaceAlt}
            className="Reaction-image"
          />
        </div>
      </div>

      <div className="Reaction-message" data-testid="reaction-message">
        <p>{feedbackMessage}</p>
      </div>
    </div>
  );
};

export default PulserMessage;
