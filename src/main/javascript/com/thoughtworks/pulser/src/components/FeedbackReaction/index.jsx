import "./FeedbackReactions.css";

const FeedbackReaction = ({
  reactionName,
  reactionImage,
  reactionAlt,
  reactionKey,
  onReactionClick,
  isReactionPressed,
}) => {
  const isPressed = isReactionPressed(reactionKey);
  const onClick = (event) => {
    onReactionClick(isPressed ? " " : reactionKey);

    // isReactionPressed(reactionKey)? onReactionClick(""): onReactionClick(reactionKey);
  };

  return (
    <div
      className={`Feedback-reaction-component ${
        isPressed ? "Is-clicked" : ""
      } `}
      data-testid="feedback-reaction"
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
