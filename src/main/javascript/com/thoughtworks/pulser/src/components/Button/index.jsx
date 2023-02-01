import React from 'react'
import "./Button.css";

const Button = ({ onClickButton, buttonName, isDisabled }) => {
  return (
    <div>
      <button 
        className="Button"
        data-testid="button"
        onClick={onClickButton}
        name={buttonName}
        disabled={isDisabled()}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Button