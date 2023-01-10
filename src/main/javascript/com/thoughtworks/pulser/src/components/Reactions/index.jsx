import React from "react";
import FeedbackReaction from "../FeedbackReaction";
import { reactionsArray } from "../../utils/reactionsUtils";
import "./Reactions.css";

const Reactions = ({ onReactionChange }) => {

  return (
    <div className="Reactions-container">
      {reactionsArray.map((reaction) => {
        return (
          <div key={reaction.key}>
            <FeedbackReaction
              reactionName={reaction.reactionName}
              reactionImage={reaction.reactionImage}
              reactionAlt={reaction.reactionAlt}
              onReactionImageClick={onReactionChange}
              reactionKey={reaction.key}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Reactions;
