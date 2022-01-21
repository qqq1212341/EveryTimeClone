import styled from "styled-components/native";
import {
  DARK_BACKGROUND_COLOR,
  MAIN_COLOR,
  SCREEN_HEIGHT,
} from "../../common/commonStyle";

export const StyledCreateCommentContainer = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT / 12}px;
  position: absolute;
  bottom: 0px;
  padding: 0px 15px;
  padding-bottom: 20px;
`;

export const StyledInputContainer = styled.View`
  background-color: ${DARK_BACKGROUND_COLOR};
  height: 100%;
  /* width: 100%; */
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const StyledCheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;

  width: 15%;
`;

export const StyledCheckBoxIcon = styled.TouchableOpacity`
  margin-left: 8px;
`;

export const StyledCheckBoxText = styled.Text`
  color: ${MAIN_COLOR};
  font-weight: 900;
  margin-left: 4px;
`;

export const StyledTextInputContainer = styled.View`
  width: 75%;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  /* background-color: red; */
`;

export const StyledTextInput = styled.TextInput`
  font-size: 12px;
`;

export const StyledSubmitContainer = styled.View`
  width: 10%;
  margin-top: 8px;
`;

export const StyledSubmitButton = styled.TouchableOpacity``;
