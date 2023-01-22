import React from "react";
import { reactionsArray } from "../../utils/reactionsUtils";
import PulserMessage from "../PulserMessage/index";

const PulserMessages = ({ feedData }) => {
  if (feedData === undefined) {
    return (
      <p data-testid="pulser-invalid-message">
        Unable to fetch data. Please try again later.
      </p>
    );
  } else if (feedData.length === 0) {
    return (
      <p data-testid="pulser-no-data-message">
        No Feedback message has been shared with us! Be the first to share your
        thoughts with us so that we can improve our services as we move forward!
      </p>
    );
  }

  return feedData.map((message) => {
    for (let i = 0; i < reactionsArray.length; i++) {
      if (message.face === reactionsArray[i].key) {
        return (
          <div className="Pulser-messages-container" key={message.id}>
            <PulserMessage
              reactionTitle={reactionsArray[i].reactionName}
              reactionFace={reactionsArray[i].reactionImage}
              reactionFaceAlt={reactionsArray[i].reactionAlt}
              feedbackMessage={message.body}
            />
          </div>
        );
      }
    }
    throw new Error(
      `The following message ${message} cannot be displayed properly.`
    );
  });
};

export default PulserMessages;
