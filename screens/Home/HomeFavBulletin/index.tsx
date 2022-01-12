import React, { Ref, useEffect, useState } from "react";
import {
  StyledFavBottomContainer,
  StyledFavBottomImage,
  StyledFavBottomPost,
  StyledFavBottomTextContainer,
  StyledFavBottomTitle,
} from "./style";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { StyledBorderContainer } from "../../../Common/commonStyle";
import TopContainer from "../../../components/TopContainer";
import { forwardRef, useImperativeHandle } from "react";
import { homeRefObject, NativeStackProps } from "../../../Common/commonType";

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

interface postArrayProperty {
  isNew: boolean;
  title: string;
}

const HomeFavBulletin = forwardRef((props: any, ref: Ref<homeRefObject>) => {
  const [postArray, setPostArray] = useState<postArrayProperty[]>([]);
  const navigation = useNavigation<NativeStackProps>();

  async function getFirebaseData(bulletinId: string) {
    const firestorePost = await firestore()
      .collection("Post")
      .doc("NormalBulletin")
      .collection(bulletinId)
      .orderBy("Date", "desc")
      .limit(1)
      .get();
    return firestorePost.docs[0].data();
  }

  const loadPostArray = async () => {
    const date = new Date();
    const currenDate = Math.round(date.getTime() / 1000);
    let PostArray: postArrayProperty[] = [];

    for (let bulletin of userBulletinList) {
      const firstPost = await getFirebaseData(bulletin.id);
      if (currenDate - firstPost.Date.seconds < 86400) {
        PostArray.push({
          isNew: true,
          title: firstPost.Title,
        });
      } else {
        PostArray.push({
          isNew: false,
          title: firstPost.Title,
        });
      }
    }

    setPostArray(PostArray);
  };

  useImperativeHandle(ref, () => ({ loadPostArray }));

  useEffect(() => {
    loadPostArray();
  }, []);

  const renderPostArray = () => {
    if (postArray) {
      return postArray.map((post, index) => {
        const bulletinName = userBulletinList[index].name;
        const bulletinId = userBulletinList[index].id;

        return (
          <StyledFavBottomContainer
            onPress={() => goToDetail(bulletinId, bulletinName)}
            key={`Bottom_${index}`}
          >
            <StyledFavBottomTextContainer>
              <StyledFavBottomTitle>{bulletinName}</StyledFavBottomTitle>
              <StyledFavBottomPost>{post.title}</StyledFavBottomPost>
            </StyledFavBottomTextContainer>
            {post.isNew ? (
              <StyledFavBottomImage
                source={require("../../../img/nIcon.png")}
              />
            ) : (
              <View />
            )}
          </StyledFavBottomContainer>
        );
      });
    }
  };

  const goToDetail = (bulletinId: string, bulletinName: string) => {
    navigation.navigate("Stack", {
      screen: "DetailBulletin",
      params: {
        bulletinId,
        bulletinName,
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
});

export default HomeFavBulletin;
