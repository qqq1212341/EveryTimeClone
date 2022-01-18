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
  StyledReplyIcon,
  StyledVerticalDivider,
} from "./style";
import { AntDesign, EvilIcons, Entypo, Feather } from "@expo/vector-icons";
import { GRAY_COLOR, LIKE_COLOR } from "../../common/commonStyle";
import { commentType, dateType } from "../../common/commonType";
import { View } from "react-native";

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
    renderDate: string | dateType,
    renderLike: array
  ) => (
    <StyledCommentContainer>
      <StyledCommentTop>
        <LeftProfile name={renderName} isBold={false} />
        <StyledLikeCommentContainer>
          <StyledIconContainer>
            <EvilIcons name="comment" size={20} color={GRAY_COLOR} />
          </StyledIconContainer>
          <StyledVerticalDivider />
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
        <StyledCommnetTimeLine>{renderDate}</StyledCommnetTimeLine>
        <StyledLikeText>
          <AntDesign name="like2" size={12} color={LIKE_COLOR} />
          &nbsp;{renderLike}
        </StyledLikeText>
      </StyledBottomContainer>
    </StyledCommentContainer>
  );

  const renderReplyCommnet = () => {
    if (ReplyComment.length > 0) {
      ReplyComment.map((item, index) => (
        <View key={index}>
          <StyledReplyIcon>
            <Feather name="corner-down-right" size={24} color="black" />
          </StyledReplyIcon>
          {renderComment(item.Name, item.Content, item.Date, item.Like)}
        </View>
      ));
    }
  };

  return (
    <>
      {renderComment(Name, Content, Date, Like)}
      {renderReplyCommnet()}
    </>
  );
};

export default Comment;
