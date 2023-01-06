import React from "react";
import { reactionsArray } from "../../utils/reactionsUtils";
import FeedbackReaction from "../FeedbackReaction";
import "./Reactions.css"

const Reactions = () => {
  
  return (
    <div className="Reactions-container">
      {reactionsArray.map((reaction) => {
        return(
          <div key={reaction.key}>
          <FeedbackReaction
          reactionName={reaction.reactionName}
          reactionImage={reaction.reactionImage}
          reactionAlt={reaction.reactionAlt}
          />
          </div>
          )
      })}
    </div>
  );
};

export default Reactions;
