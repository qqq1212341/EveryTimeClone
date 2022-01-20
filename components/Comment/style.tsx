import styled from "styled-components/native";
import {
  BACKGROUND_COLOR,
  BORDER_COLOR,
  GRAY_COLOR,
  LIKE_COLOR,
  SCREEN_HEIGHT,
} from "../../common/commonStyle";

export const StyledCommentContainer = styled.View`
  width: 95%;
  margin: 0% 2.5%;
  padding: 10px
  border-bottom-width: 1px;
  border-bottom-color: ${BORDER_COLOR};
`;

export const StyledCommentTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLikeCommentContainer = styled.View`
  flex-direction: row;
  background-color: ${BACKGROUND_COLOR};
  align-items: center;
  border-radius: 5px;
`;

export const StyledIconContainer = styled.TouchableOpacity`
  padding: 7px 10px;
  justify-content: center;
  align-items: center;
`;

export const StyledVerticalDivider = styled.View`
  height: 20px;
  width: 1px;
  background-color: ${BORDER_COLOR};
`;

export const StyledCommnetText = styled.Text`
  margin-top: 5px;
  font-weight: 300;
  margin-top: 8px;
`;

export const StyledBottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const StyledCommnetTimeLine = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${GRAY_COLOR};
  margin-right: 10px;
`;

export const StyledLikeText = styled.Text`
  color: ${LIKE_COLOR};
  font-weight: 400;
`;

export const StyledReplyIcon = styled.View`
  margin-left: 15px;
  margin-top: 20px;
`;

export const StyledReplyContainer = styled.View`
  flex-direction: row;
`;

export const StyledReply = styled.View`
  flex: 1;
  margin-left: -5px;
`;
