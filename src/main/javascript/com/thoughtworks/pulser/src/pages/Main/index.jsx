import FeedbackMessage from "../../components/FeedbackMessage";
import Reactions from "../../components/Reactions";
import "././Main.css";
import { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [pulserObject, setPulserObject] = useState({
    userReaction: "",
    userMessage: "",
  });

  useEffect(() => {
    setIsDisabled(
      pulserObject.userMessage === "" || pulserObject.userReaction === ""
    );
  }, [pulserObject]);
  const handleUserReactionChange = (reactionKey) => {
    setPulserObject({ ...pulserObject, userReaction: reactionKey });
  };

  const handleUserFeedbackChange = (event) => {
    setPulserObject({ ...pulserObject, userMessage: event.target.value });
  };

  const isReactionPressed = (reactionKey) => {
    return reactionKey === pulserObject.userReaction;
  };

  let navigate = useNavigate();

  const handleButtonClick = async () => {
    setIsDisabled(true);

    try {
      const response = await fetch("http://localhost:8080/pulserfeed/message", {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Basic user:password`,
        },
        body: JSON.stringify({
          // expected POST request payload goes here
          face: pulserObject.userReaction,
          body: pulserObject.userMessage,
        }),
      });
      console.log("RESPONSE STATUS", response);
      // logic when the fetch is successful
      if (response.status === 200) {
        setPulserObject({
          userReaction: "",
          userMessage: "",
        });
        navigate("/pulserfeed/messages");

        // parsed response after the fetch
        const data = await response.json();
        console.log("My POST", data);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <div className="Main" data-testid="main-page">
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
          isDisabled={() => isDisabled}
        />
      </div>
    </div>
  );
}

export default Main;
