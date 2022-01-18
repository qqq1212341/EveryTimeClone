import styled from "styled-components/native";

export const StyledLeftProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const StyledProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

interface ProfileWriterProps {
  isBold: boolean;
}

export const StyledProfileWriter = styled.Text<ProfileWriterProps>`
  font-weight: ${(props) => (props.isBold ? "600" : "500")};
  font-size: 17px;
  margin-left: 7px;
`;
