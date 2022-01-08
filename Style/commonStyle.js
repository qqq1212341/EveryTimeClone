import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const StyledBorderContainer = styled.View`
  margin: 0px 10px;
  margin-top: 10px;
  border-color: #d0d0d0;
  border-width: 0.5px;
  border-radius: 15px;
`;

export const StyledTopText = styled.Text`
  font-weight: 700;
  font-size: 19px;
  margin-left: 15px;
`;
