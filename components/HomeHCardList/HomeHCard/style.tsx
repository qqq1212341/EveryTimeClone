import styled from "styled-components/native";

interface BottomTextProps {
  bottomTextColor: string;
}

export const StyledHCardContainer = styled.View`
  border-color: #d0d0d0;
  border-width: 0.5px;
  border-radius: 20px;
  width: 280px;
  height: 180px;
  margin-right: 10px;
  margin-left: 10px;
`;
export const StyledHCardInnerContainer = styled.View`
  flex-direction: row;
  padding: 20px 7px;
`;
export const StyledHCardInnerRightContainer = styled.View`
  margin-left: 15px;
`;
export const StyledHCardInnerTopText = styled.Text`
  font-weight: 700;
  font-size: 19px;
`;
export const StyledHCardInnerBottomText = styled.Text<BottomTextProps>`
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => props.bottomTextColor ?? "black"};
`;
export const StyledHCardInnerButton = styled.TouchableOpacity`
  justify-content: center;
  margin-top: 20px;
  height: 30px;
  width: 80px;
  background-color: rgb(250, 250, 250);
  border-radius: 20px;
`;
export const StyledHCardInnerButtonText = styled.Text`
  font-size: 13px;
  text-align: center;
`;
