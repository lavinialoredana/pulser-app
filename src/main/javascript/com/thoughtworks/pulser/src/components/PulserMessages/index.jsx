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
    const reaction = reactionsArray.find((x) => message.face === x.key);
    if (!reaction) {
      throw new Error(
        `The following message ${message} cannot be displayed properly.`
      );
    }
    return (
      <div className="Pulser-messages-container" key={message.id}>
        <PulserMessage
          reactionTitle={reaction.reactionName}
          reactionFace={reaction.reactionImage}
          reactionFaceAlt={reaction.reactionAlt}
          feedbackMessage={message.body}
        />
      </div>
    );
  });
};

export default PulserMessages;
