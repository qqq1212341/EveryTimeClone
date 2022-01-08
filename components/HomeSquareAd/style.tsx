import styled from "styled-components/native";
import { SCREEN_HEIGHT } from "../../Style/commonStyle";

export const StyledSqaureAdContainer = styled.TouchableOpacity`
  height: 85%;
`;
export const StyledSqaureAdTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 19px;
  align-items: center;
`;
export const StyledSqaureAdProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const StyledSqaureAdProfileImage = styled.Image`
  width: 30px;
  height: 30px;
`;
export const StyledSqaureAdProfileText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
export const StyledSqaureAdMarkContainer = styled.View`
  height: 20px;
  width: 35px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: rgb(242, 242, 242);
`;
export const StyledSqaureAdMark = styled.Text`
  color: rgb(157, 157, 157);
`;
export const StyledSqaureAdImage = styled.Image`
  width: 100%;
  border-radius: 20px;
`;
export const StyledSqaureAdTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  margin-left: 19px;
  margin-top: 10px;
`;
export const StyledSqaureAdDesc = styled.Text`
  width: 90%;
  font-size: 16px;
  margin-left: 19px;
  margin-top: 5px;
`;
export const StyledSqaureAdButton = styled.Button`
  height: 85%;
`;
