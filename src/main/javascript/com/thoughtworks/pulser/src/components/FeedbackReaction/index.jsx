const FeedbackReaction = ({ reactionName, reactionImage, reactionAlt }) => {
  return (
    <div className="FeedbackReaction-component">
      <h3 data-testid="feedBackReaction-title"> {reactionName}</h3>
      <img src={reactionImage} alt={reactionAlt} />
    </div>
  );
};

export default FeedbackReaction;
