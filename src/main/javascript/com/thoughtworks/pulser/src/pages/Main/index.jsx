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

    await fetch("https://reqbin.com/echo/post/json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        face: pulserObject.userReaction,
        inputBodyMessage: pulserObject.userMessage,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((responseJson) => {
        console.log("My POST", JSON.stringify(responseJson));
        setPulserObject({
          userReaction: "",
          userMessage: "",
        });
      })
      .catch((error) => {
        alert("Something went wrong. Try again later");
        console.log("Error fetching data", error);
      });

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
