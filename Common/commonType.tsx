import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootNavigatorParamList } from '../navigators/Root';

// 댓글의 타입
export interface commentType {
  Writer: string;
  Date: Date;
  ReplyComment: commentType[];
  Like: number;
  Name: string;
  Content: string;
}

// JS date object 타입
interface dateType {
  nanoseconds: number;
  seconds: number;
}

// 게시글 타입
export interface postType {
  Comments: commentType[];
  Writer: string;
  Date: dateType;
  Like: string[];
  Name: string;
  Title?: string;
  Desc: string;
  Pictures: string[];
  Scrab: string[];
  postId: string;
  stringDate?: string;
}

export interface userType {
  id: string;
  name: string;
  year: number;
  profileImage: string;
  commnetHistory: string[];
  postHistory: string[];
  likeList: string[];
  scrabList: string[];
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
export type NativeStackProps = NativeStackNavigationProp<RootNavigatorParamList, 'Stack'>;
