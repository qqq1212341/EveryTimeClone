import styled from "styled-components/native";

export const StyledFavContainer = styled.View`
  margin: 10px 10px;
  border-color: #d0d0d0;
  border-width: 0.5px;
  border-radius: 15px;
`;
export const StyledFavTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 15px;
`;
export const StyledFavTopText = styled.Text`
  font-weight: 700;
  font-size: 19px;
  margin-left: 15px;
`;
export const StyledFavTopMore = styled.TouchableOpacity`
  margin-right: 10px;
`;
export const StyledFavTopMoreText = styled.Text`
  font-size: 15px;
  color: rgb(193, 97, 80);
`;
export const StyledFavBottomContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 11px 15px;
  align-items: center;
`;
export const StyledFavBottomTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
export const StyledFavBottomPost = styled.Text`
  margin-left: 10px;
  font-weight: 200;
  font-size: 13px;
`;
