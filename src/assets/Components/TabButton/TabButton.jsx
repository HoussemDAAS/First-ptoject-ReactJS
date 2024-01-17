import React from "react";
const TabButton = ( {children,onSelect,isActive,buttonContainer}) => {
const ButtonContainer=buttonContainer;
  return (
    <ButtonContainer>
      <button  className={isActive ? "active" : undefined} onClick={onSelect}>{children}</button>
    </ButtonContainer>
  );
};

export default TabButton;
