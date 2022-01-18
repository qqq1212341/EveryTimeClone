import React from "react";
import {
  StyledLeftProfileContainer,
  StyledProfileImage,
  StyledProfileWriter,
} from "./style";

const LeftProfile = ({ name, isBold }: { name: string; isBold: boolean }) => {
  return (
    <StyledLeftProfileContainer>
      <StyledProfileImage source={require("../../img/person.png")} />
      <StyledProfileWriter isBold={isBold}>{name}</StyledProfileWriter>
    </StyledLeftProfileContainer>
  );
};

export default LeftProfile;
