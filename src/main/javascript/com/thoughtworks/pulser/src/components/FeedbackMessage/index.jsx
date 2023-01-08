import React from "react";

const FeedbackMessage = ({ userFeedback, onUserFeedbackChange }) => {
  return (
    <div>
      <textarea
        data-testid="textarea-field"
        rows="4"
        cols="80"
        placeholder="Write here any additional feedback"
        value={userFeedback}
        onChange={onUserFeedbackChange}
      ></textarea>
    </div>
  );
};

export default FeedbackMessage;
