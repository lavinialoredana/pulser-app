import FeedbackMessage from "../../components/FeedbackMessage";
import Reactions from "../../components/Reactions";
import "././Main.css";

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <h1 data-testid="main-header"> How are you feeling today? </h1>
      </header>
      <div>
        <Reactions/>
        <FeedbackMessage/>
      </div>
    </div>
  );
}

export default Main;