import "./FeedbackReactions.css";

const FeedbackReaction = ({ reactionName, reactionImage, reactionAlt }) => {
  return (
    <div className="Feedback-reaction-component">
      <h3 data-testid="feedBackReaction-title"> {reactionName}</h3>
      <img
        src={reactionImage}
        alt={reactionAlt}
        className="Feedback-reaction-image"
      />
    </div>
  );
};

export default FeedbackReaction;
