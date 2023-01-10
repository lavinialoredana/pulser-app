import React from "react";
import FeedbackReaction from "../FeedbackReaction";
import "./Reactions.css";

const Reactions = ({ reactions, setReactions }) => {
  const handleReactionImageClick = (key) => {
    const newReactionsArray = reactions.map((reaction) => {
      // todo: to simplify if else
      if (reaction.key === key) {
        reaction.isClicked = !reaction.isClicked;
      } else {
        reaction.isClicked = false;
      }
      return reaction;
    });

    setReactions(newReactionsArray);
  };

  return (
    <div className="Reactions-container">
      {reactions.map((reaction) => {
        return (
          <div key={reaction.key}>
            <FeedbackReaction
              reactionName={reaction.reactionName}
              reactionImage={reaction.reactionImage}
              reactionAlt={reaction.reactionAlt}
              onReactionImageClick={handleReactionImageClick}
              reactionKey={reaction.key}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Reactions;
