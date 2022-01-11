export interface commentType {
  Writer: string;
  Date: Date;
  ReplyComment: commentType[];
  Like: number;
  Name: string;
  Content: string;
}

interface dateType {
  nanoseconds: number;
  seconds: number;
}

export interface postType {
  Comments: commentType[];
  Writer: string;
  Date: dateType;
  Like: number;
  Name: string;
  Title: string;
  Desc: string;
  Pictures: string[];
  Scrab: number;
  postId: string;
}

export interface preferenceProps {
  myPostCommentNoti: boolean;
  myPostHOTNoti: boolean;
  myPostLikedNoti: boolean;
  myCommentReplyNoti: boolean;
  myCommentLikedNoti: boolean;
}
