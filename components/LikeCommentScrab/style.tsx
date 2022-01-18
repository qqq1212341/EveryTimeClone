import styled from "styled-components/native";
import {
  COMMENT_COLOR,
  LIKE_COLOR,
  SCRAB_COLOR,
} from "../../common/commonStyle";

export const StyledTrendingBottomRight = styled.View`
  flex-direction: row;
`;
export const StyledTrendingBottomRightLike = styled.Text`
  font-size: 16px;
  color: ${LIKE_COLOR};
`;
export const StyledTrendingBottomRightComment = styled.Text`
  font-size: 16px;
  margin-left: 4px;
  color: ${COMMENT_COLOR};
`;
export const StyledTrendingBottomRightScrab = styled.Text`
  font-size: 16px;
  margin-left: 4px;
  color: ${SCRAB_COLOR};
`;
