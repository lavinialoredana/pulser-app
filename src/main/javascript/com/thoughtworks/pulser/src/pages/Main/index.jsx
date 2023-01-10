import FeedbackMessage from "../../components/FeedbackMessage";
import Reactions from "../../components/Reactions";
import "././Main.css";
import { useState } from "react";

function Main() {
  const [pulserObject, setPulserObject] = useState({
    userMessage: "",
    userReaction: "",
  });

  const handleUserFeedbackChange = (event) => {
    setPulserObject({ ...pulserObject, userMessage: event.target.value });
  };

  const handleUserReactionChange = (reactionKey) => {
    setPulserObject({ ...pulserObject, userReaction: reactionKey });
  };

  return (
    <div className="Main">
      <header className="Main-header">
        <h1 data-testid="main-header"> How are you feeling today? </h1>
      </header>
      <div>
        <Reactions onReactionChange={handleUserReactionChange} />
        <FeedbackMessage
          userFeedback={pulserObject.userMessage}
          onUserFeedbackChange={handleUserFeedbackChange}
        />
      </div>
    </div>
  );
}

export default Main;
