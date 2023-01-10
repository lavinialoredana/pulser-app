import "./FeedbackReactions.css";

const FeedbackReaction = ({
  reactionName,
  reactionImage,
  reactionAlt,
  reactionKey,
  onReactionImageClick,
}) => {
 
  const onClick=(event)=>{
    onReactionImageClick(reactionKey)
  }

  return (
    <div className="Feedback-reaction-component">
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
