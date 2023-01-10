import React from "react";
import FeedbackReaction from "../FeedbackReaction";
import { reactionsArray } from "../../utils/reactionsUtils";
import "./Reactions.css";

const Reactions = ({ onReactionChange, onReactionPress }) => {
  return (
    <div className="Reactions-container">
      {reactionsArray.map((reaction) => {
        return (
          <div key={reaction.key}>
            <FeedbackReaction
              reactionName={reaction.reactionName}
              reactionImage={reaction.reactionImage}
              reactionAlt={reaction.reactionAlt}
              reactionKey={reaction.key}
              onReactionClick={onReactionChange}
              isReactionPressed={onReactionPress}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Reactions;
