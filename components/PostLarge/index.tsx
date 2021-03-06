import React, { useEffect } from "react";
import {
  StyledTrendingBottom,
  StyledTrendingBottomLeft,
  StyledTrendingContainer,
  StyledTrendingMiddleDesc,
  StyledTrendingMiddleTitle,
  StyledTrendingTop,
  StyledTrendingTopLeft,
  StyledTrendingTopProfile,
  StyledTrendingTopTimeline,
  StyledTrendingTopWriter,
} from "./style";
import LikeComment from "../LikeCommentScrab";
import { NativeStackProps, postType } from "../../common/commonType";
import { useNavigation } from "@react-navigation/native";
import LikeCommentScrab from "../LikeCommentScrab";

interface postLargeProps {
  postData: postType;
  bulletinName: string;
}

const PostLarge: React.FC<postLargeProps> = ({ postData, bulletinName }) => {
  const navigation = useNavigation<NativeStackProps>();

  // add string Date to postData
  postData = { ...postData, stringDate: toDateTime(postData.Date.seconds) };

  function toDateTime(secs: number): string {
    var date = new Date(null);
    date.setSeconds(secs);
    return date.toISOString().substr(0, 10);
  }

  const goToDetailPost = () => {
    navigation.navigate("Stack", {
      screen: "DetailPost",
      params: {
        postData,
        bulletinName,
      },
    });
  };

  return (
    <StyledTrendingContainer onPress={goToDetailPost}>
      <StyledTrendingTop>
        <StyledTrendingTopLeft>
          <StyledTrendingTopProfile source={require("../../img/person.png")} />
          <StyledTrendingTopWriter>{postData.Name}</StyledTrendingTopWriter>
        </StyledTrendingTopLeft>
        <StyledTrendingTopTimeline>
          {postData.stringDate}
        </StyledTrendingTopTimeline>
      </StyledTrendingTop>
      {postData.Title && (
        <StyledTrendingMiddleTitle>{postData.Title}</StyledTrendingMiddleTitle>
      )}
      <StyledTrendingMiddleDesc>{postData.Desc}</StyledTrendingMiddleDesc>
      <StyledTrendingBottom>
        <StyledTrendingBottomLeft>{bulletinName}</StyledTrendingBottomLeft>
        <LikeCommentScrab
          // Like.length로 고쳐야함
          LikeNum={postData.Like}
          CommentNum={postData.Comments.length}
          isScrabOn={false}
        />
      </StyledTrendingBottom>
    </StyledTrendingContainer>
  );
};

export default PostLarge;
