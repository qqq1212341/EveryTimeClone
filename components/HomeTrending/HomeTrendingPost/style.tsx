import styled from "styled-components/native";

export const StyledTrendingContainer = styled.TouchableOpacity`
  padding: 10px;
  padding-left: 15px;
`;
export const StyledTrendingTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const StyledTrendingTopLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const StyledTrendingTopProfile = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;
export const StyledTrendingTopWriter = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 7px;
`;
export const StyledTrendingTopTimeline = styled.Text`
  color: gray;
  font-size: 11px;
`;
export const StyledTrendingMiddleTitle = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-top: 5px;
`;
export const StyledTrendingMiddleDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;
export const StyledTrendingBottom = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledTrendingBottomLeft = styled.Text`
  color: gray;
  font-size: 14px;
`;
export const StyledTrendingBottomRight = styled.View`
  flex-direction: row;
`;
export const StyledTrendingBottomRightLike = styled.Text`
  color: #ff3939;
`;
export const StyledTrendingBottomRightComment = styled.Text`
  margin-left: 2px;
  color: #4646f2;
`;
