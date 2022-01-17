import styled from "styled-components/native";
import { MAIN_COLOR, SCREEN_HEIGHT } from "../../common/commonStyle";

export const StyledLoginContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: ${SCREEN_HEIGHT / 7}px;
`;

export const StyledLoginTopContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const StyledLoginTopImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export const StyledLoginBaseText = styled.Text`
  color: rgb(174, 174, 174);
  font-size: 17px;
`;

export const StyledLoginHighLightText = styled.Text`
  color: ${MAIN_COLOR};
  font-size: 24px;
  font-weight: 900;
`;

export const StyledLoginTextInputContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 75%;
`;

export const StyledTextInput = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 5px;
  font-size: 16px;
  color: #000000;
  background-color: rgb(238, 238, 238);
`;
