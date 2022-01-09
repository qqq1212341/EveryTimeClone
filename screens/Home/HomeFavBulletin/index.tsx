import React, { useEffect, useState } from "react";
import {
  StyledFavBottomContainer,
  StyledFavBottomImage,
  StyledFavBottomPost,
  StyledFavBottomTextContainer,
  StyledFavBottomTitle,
} from "./style";

import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../../../navigators/Root";
import { View } from "react-native";
import {
  StyledBorderContainer,
  StyledTopText,
} from "../../../Style/commonStyle";
import TopContainer from "../../../components/TopContainer";

const userBulletinList = [
  { name: "자유게시판", id: "Free" },
  { name: "비밀게시판", id: "Private" },
  { name: "졸업생게시판", id: "Graduate" },
  { name: "새내기게시판", id: "Freshman" },
  { name: "시사·아슈", id: "Issue" },
  { name: "장터게시판", id: "Sale" },
  { name: "정보게시판", id: "Info" },
  { name: "취업·진로", id: "Employment" },
  { name: "홍보게시판", id: "Promotion" },
  { name: "동아리·학회", id: "Circles" },
];

type DetailScreenProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Stack"
>;

interface postArrayProperty {
  isNew: boolean;
  title: string;
}

const HomeFavBulletin: React.FC = () => {
  const [postArray, setPostArray] = useState<postArrayProperty[]>([]);
  const navigation = useNavigation<DetailScreenProp>();

  useEffect(() => {
    async function loadPostArray() {
      const date = new Date();
      const currenDate = Math.round(date.getTime() / 1000);
      let PostArray: postArrayProperty[] = [];
      await Promise.all(
        userBulletinList.map(async (Bulletin): Promise<void> => {
          const firstPost = await firestore()
            .collection("Post")
            .doc("NormalBulletin")
            .collection(Bulletin.id)
            .orderBy("Date", "desc")
            .limit(1)
            .get();
          // 1 day == 86400
          if (currenDate - firstPost.docs[0].data().Date.seconds < 86400) {
            PostArray.push({
              isNew: true,
              title: firstPost.docs[0].data().Title,
            });
          } else {
            PostArray.push({
              isNew: false,
              title: firstPost.docs[0].data().Title,
            });
          }
        })
      );
      setPostArray(PostArray);
    }
    loadPostArray();
  }, []);

  const renderPostArray = () => {
    if (postArray) {
      return postArray.map((post, index) => (
        <StyledFavBottomContainer
          onPress={() => goToDetail(index)}
          key={`Bottom_${index}`}
        >
          <StyledFavBottomTextContainer>
            <StyledFavBottomTitle>
              {userBulletinList[index].name}
            </StyledFavBottomTitle>
            <StyledFavBottomPost>{post.title}</StyledFavBottomPost>
          </StyledFavBottomTextContainer>
          {post.isNew ? (
            <StyledFavBottomImage source={require("../../../img/nIcon.png")} />
          ) : (
            <View />
          )}
        </StyledFavBottomContainer>
      ));
    }
  };

  const goToDetail = (index: number) => {
    const bullentinName = userBulletinList[index].name;
    navigation.navigate("Stack", {
      screen: "Detail",
      params: {
        index,
        bullentinName,
      },
    });
  };

  const goToBulletinList = () => {
    navigation.navigate("Tabs", {
      screen: "BulletinList",
    });
  };

  return (
    <StyledBorderContainer>
      <TopContainer
        text="즐겨찾는 게시판"
        onPress={goToBulletinList}
        isMore={true}
      />
      {renderPostArray()}
    </StyledBorderContainer>
  );
};

export default HomeFavBulletin;
