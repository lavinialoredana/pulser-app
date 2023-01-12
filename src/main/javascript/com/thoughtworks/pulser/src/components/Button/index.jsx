import React from 'react'

const Button = ({ onClickButton, buttonName, isDisabled }) => {
  return (
    <div>
      <button
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