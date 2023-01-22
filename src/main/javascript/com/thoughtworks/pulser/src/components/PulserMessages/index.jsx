import React from "react";
import { reactionsArray } from "../../utils/reactionsUtils";
import PulserMessage from "../PulserMessage/index";

const PulserMessages = ({ feedData }) => {
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
    return <p> We are trying to display your data!</p>;
  });
};

export default PulserMessages;
