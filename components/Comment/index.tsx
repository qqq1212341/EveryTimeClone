import React from "react";
import LeftProfile from "../LeftProfile";
import LikeCommentScrab from "../LikeCommentScrab";
import {
  StyledBottomContainer,
  StyledCommentContainer,
  StyledCommentTop,
  StyledCommnetText,
  StyledCommnetTimeLine,
  StyledIconContainer,
  StyledLikeCommentContainer,
  StyledLikeText,
  StyledReply,
  StyledReplyContainer,
  StyledReplyIcon,
  StyledVerticalDivider,
} from "./style";
import { AntDesign, EvilIcons, Entypo, Feather } from "@expo/vector-icons";
import {
  BACKGROUND_COLOR,
  BORDER_COLOR,
  GRAY_COLOR,
  LIKE_COLOR,
} from "../../common/commonStyle";
import { commentType, dateType } from "../../common/commonType";
import { View } from "react-native";
import { toDateTime } from "../../common/commonFunction";

const Comment: React.FC<commentType> = ({
  Content,
  Date,
  Like,
  Name,
  ReplyComment,
  Writer,
}) => {
  const renderComment = (
    renderName: string,
    renderContent: string,
    renderDate: dateType,
    renderLike: array,
    isReply: boolean
  ) => (
    <StyledCommentContainer>
      <StyledCommentTop>
        <LeftProfile name={renderName} isBold={false} />
        <StyledLikeCommentContainer isReply={isReply}>
          {!isReply && (
            <>
              <StyledIconContainer>
                <EvilIcons name="comment" size={20} color={GRAY_COLOR} />
              </StyledIconContainer>
              <StyledVerticalDivider />
            </>
          )}
          <StyledIconContainer>
            <AntDesign name="like2" size={16} color={GRAY_COLOR} />
          </StyledIconContainer>
          <StyledVerticalDivider />
          <StyledIconContainer>
            <Entypo name="dots-three-vertical" size={12} color={GRAY_COLOR} />
          </StyledIconContainer>
        </StyledLikeCommentContainer>
      </StyledCommentTop>
      <StyledCommnetText>{renderContent}</StyledCommnetText>
      <StyledBottomContainer>
        <StyledCommnetTimeLine>
          {toDateTime(renderDate.seconds)}
        </StyledCommnetTimeLine>
        <StyledLikeText>
          <AntDesign name="like2" size={12} color={LIKE_COLOR} />
          &nbsp;{renderLike}
        </StyledLikeText>
      </StyledBottomContainer>
    </StyledCommentContainer>
  );

  const renderReplyComment = (ReplyComment: commentType[]) => {
    if (ReplyComment.length > 0) {
      return ReplyComment.map((item: commentType, index: number) => {
        return (
          <StyledReplyContainer key={index}>
            <StyledReplyIcon>
              <Feather name="corner-down-right" size={16} color={GRAY_COLOR} />
            </StyledReplyIcon>
            <StyledReply>
              {renderComment(
                item.Name,
                item.Content,
                item.Date,
                item.Like,
                true
              )}
            </StyledReply>
          </StyledReplyContainer>
        );
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: BORDER_COLOR,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      {renderComment(Name, Content, Date, Like, false)}
      {renderReplyComment(ReplyComment)}
    </View>
  );
};

export default Comment;
