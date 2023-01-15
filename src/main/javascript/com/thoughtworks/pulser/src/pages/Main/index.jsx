import FeedbackMessage from "../../components/FeedbackMessage";
import Reactions from "../../components/Reactions";
import "././Main.css";
import { useState } from "react";
import Button from "../../components/Button";

function Main() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pulserObject, setPulserObject] = useState({
    userReaction: "",
    userMessage: "",
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

  const handleButtonClick = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://reqbin.com/echo/post/json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // expected POST request payload goes here
          face: pulserObject.userReaction,
          inputBodyMessage: pulserObject.userMessage,
        }),
      });
      console.log("RESPONSE STATUS", response.status)
      // logic when the fetch is successful
      if (response.status === 200) {
        setPulserObject({
          userReaction: "",
          userMessage: "",
        });

        // parsed response after the fetch
        const data = await response.json();
        console.log("My POST", data);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }

    setIsSubmitting(false);
  };

  const handleDisabledState = () => {
    if (pulserObject.userMessage === "" || pulserObject.userReaction === "") {
      return true;
    }
    if (isSubmitting) {
      return true;
    }
    return false;
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
        <Button
          onClickButton={handleButtonClick}
          buttonName="Submit"
          isDisabled={handleDisabledState}
        />
      </div>
    </div>
  );
}

export default Main;
