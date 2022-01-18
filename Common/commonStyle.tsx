import { Dimensions } from "react-native";
import styled from "styled-components/native";

// screen size

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

// school name

export const SCHOOL_NAME = "고려대 서울캠";

// color list

export const BORDER_COLOR = "#d0d0d0";
export const BACKGROUND_COLOR = "rgb(249, 249, 249)";
export const MAIN_COLOR = "rgb(183, 56, 38)";
export const GRAY_COLOR = "#acacac";
export const LIKE_COLOR = "#ff3939";
export const COMMENT_COLOR = "#8383f5";
export const SCRAB_COLOR = "#cfda59";

// border in Main

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

// setting

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

// submit button, use in login & join

interface SubmitButtonProps {
  buttonBackgroundColor?: string;
}

export const StyledSubmitButton = styled.TouchableOpacity<SubmitButtonProps>`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.buttonBackgroundColor ? props.buttonBackgroundColor : "white"};
`;

interface SubmitButtonTextProps {
  buttonTextColor: string;
}

export const StyledSubmitButtonText = styled.Text<SubmitButtonTextProps>`
  text-align: center;
  padding: 10px 0px;
  color: ${(props) => props.buttonTextColor ?? "black"};
  font-size: 14px;
  font-weight: 700;
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
