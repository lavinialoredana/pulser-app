import React from "react";
import FeedbackReaction from "../FeedbackReaction";
import awesomeFace from "../../assets/images/awesome_face.png";
import happyFace from "../../assets/images/happy_face.png";
import sadFace from "../../assets/images/sad_face.png";
import angryFace from "../../assets/images/angry_face.png";


const Reactions = () => {
 
  return (
    <div>
      <FeedbackReaction
        reactionName="Awesome"
        reactionImage={awesomeFace}
        reactionAlt="awesome_face"
      />
      <FeedbackReaction
        reactionName="Happy"
        reactionImage={happyFace}
        reactionAlt="happy_face"
      />

      <FeedbackReaction
        reactionName="Sad"
        reactionImage={sadFace}
        reactionAlt="sad_face"
      />

      <FeedbackReaction
        reactionName="Angry"
        reactionImage={angryFace}
        reactionAlt="angry_face"
      />
    </div>
  );
};

export default Reactions;
