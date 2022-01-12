import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../navigators/Root";

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
  Title?: string;
  Desc: string;
  Pictures: string[];
  Scrab: number;
  postId: string;
  stringDate?: string;
}

export interface homeRefObject {
  loadPostArray: () => void;
}

export interface preferenceProps {
  myPostCommentNoti: boolean;
  myPostHOTNoti: boolean;
  myPostLikedNoti: boolean;
  myCommentReplyNoti: boolean;
  myCommentLikedNoti: boolean;
}

// use in useNavigator hook type
export type NativeStackProps = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Stack"
>;
