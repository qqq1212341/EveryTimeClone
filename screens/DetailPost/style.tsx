import styled from "styled-components/native";
import { BACKGROUND_COLOR } from "../../common/commonStyle";

export const StyledDetailPostMain = styled.View`
  padding: 19px;
  padding-bottom: 0px;
`;

export const StyledDetailProfile = styled.View`
  flex-direction: row;
`;

export const StyledDetailProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 12px;
`;

export const StyledDetailProfileTextBox = styled.View`
  margin-left: 10px;
  height: 50px;
`;

export const StyledDetailProfileName = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 3px;
`;

export const StyledDetailProfileDate = styled.Text`
  font-size: 14px;
  color: #acacac;
  margin-top: 4px;
`;

export const StyledDetailMainTitle = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-top: 15px;
`;
export const StyledDetailMainText = styled.Text`
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 10px;
`;
export const StyledDetailButtonContainer = styled.View`
  flex-direction: row;
  margin-left: 6px;
  margin-top: 10px;
`;
export const StyledDetailButton = styled.TouchableOpacity`
  background-color: ${BACKGROUND_COLOR};
  padding: 5px;
  border-radius: 5px;
  margin-left: 4px;
`;
export const StyledDetailText = styled.Text`
  color: rgb(77, 77, 77);
  font-size: 16px;
`;
