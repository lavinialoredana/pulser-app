import React from 'react'

const Button = ({onClickButton, buttonName}) => {
  return (
    <div>
      <button data-testid="button" onClick={onClickButton}>
        {buttonName}
      </button>
    </div>
  );
}

export default Button