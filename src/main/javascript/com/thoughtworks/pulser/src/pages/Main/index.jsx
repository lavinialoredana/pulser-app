import FeedbackMessage from "../../components/FeedbackMessage";
import Reactions from "../../components/Reactions";
import { reactionsArray } from "../../utils/reactionsUtils";
import "././Main.css";
import { useState } from "react";

function Main() {
  const [reactions, setReactions] = useState(reactionsArray);
  const [userFeedback, setUserFeedback]= useState("");

  const handleUserFeedbackChange= (event) => {
    setUserFeedback(event.target.value);
  };
 

  return (
    <div className="Main">
      <header className="Main-header">
        <h1 data-testid="main-header"> How are you feeling today? </h1>
      </header>
      <div>
        <Reactions reactions={reactions} setReactions={setReactions} />
        <FeedbackMessage userFeedback={userFeedback} onUserFeedbackChange={handleUserFeedbackChange}/>
      </div>
    </div>
  );
}

export default Main;
