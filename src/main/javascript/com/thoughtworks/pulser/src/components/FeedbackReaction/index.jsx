import awesomeFace from "../../assets/images/awesome_face.png"

const FeedbackReaction=()=>{

    return (
      <div className="FeedbackReaction-component">
        <h3 data-testid="feedBackReaction-title"> Awesome</h3>
        <img src={awesomeFace} alt="awesome_face"/>
        
      </div>
    );
}

export default FeedbackReaction;