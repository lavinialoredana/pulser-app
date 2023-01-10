import "./FeedbackReactions.css";

const FeedbackReaction = ({
  reactionName,
  reactionImage,
  reactionAlt,
  reactionKey,
  onReactionClick,
  isReactionPressed,
}) => {
  const onClick = (event) => {
    onReactionClick(isReactionPressed(reactionKey) ? " " : reactionKey )
    
    // isReactionPressed(reactionKey)? onReactionClick(""): onReactionClick(reactionKey);
  };

  return (
    <div
      className={`Feedback-reaction-component ${
        isReactionPressed(reactionKey) ? "Is-clicked" : ""
      } `}
    >
      <h3 data-testid="feedBackReaction-title"> {reactionName}</h3>
      <img
        src={reactionImage}
        alt={reactionAlt}
        className="Feedback-reaction-image"
        onClick={onClick}
      />
    </div>
  );
};

export default FeedbackReaction;
