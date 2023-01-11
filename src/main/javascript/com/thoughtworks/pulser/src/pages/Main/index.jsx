import FeedbackMessage from "../../components/FeedbackMessage";
import Reactions from "../../components/Reactions";
import "././Main.css";
import { useState } from "react";
import Button from "../../components/Button";

function Main() {
  const [pulserObject, setPulserObject] = useState({
    userMessage: "",
    userReaction: "",
  });

  const handleUserReactionChange = (reactionKey) => {
    setPulserObject({ ...pulserObject, userReaction: reactionKey });
  };

  const handleUserFeedbackChange = (event) => {
    setPulserObject({ ...pulserObject, userMessage: event.target.value });
  };

  const isReactionPressed = (reactionKey) => {
    return reactionKey === pulserObject.userReaction;
  };


   const handleButtonClick=()=>{
    return ""
   };

  return (
    <div className="Main">
      <header className="Main-header">
        <h1 data-testid="main-header"> How are you feeling today? </h1>
      </header>
      <div>
        <Reactions
          onReactionChange={handleUserReactionChange}
          onReactionPress={isReactionPressed}
        />
        <FeedbackMessage
          userFeedback={pulserObject.userMessage}
          onUserFeedbackChange={handleUserFeedbackChange}
        />
        <Button onClickButton={handleButtonClick} buttonName="Submit"/>
      </div>
    </div>
  );
}

export default Main;
