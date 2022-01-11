import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const BORDER_COLOR = "#d0d0d0";

export const StyledBorderContainer = styled.View`
  margin: 0px 10px;
  margin-top: 10px;
  border-color: ${BORDER_COLOR};
  border-width: 0.5px;
  border-radius: 15px;
`;

export const StyledTopText = styled.Text`
  font-weight: 700;
  font-size: 19px;
  margin-left: 15px;
`;

export const SettingTitleText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 30px;
`;

export const SettingItemText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  margin: 0px 30px;
  margin-bottom: 18px;
`;
