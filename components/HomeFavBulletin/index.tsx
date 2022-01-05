import React, { useEffect, useState } from "react";
import {
  StyledFavBottomContainer,
  StyledFavBottomPost,
  StyledFavBottomTitle,
  StyledFavContainer,
  StyledFavTopContainer,
  StyledFavTopMore,
  StyledFavTopMoreText,
  StyledFavTopText,
} from "./style";
import { AntDesign } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import { Text, View } from "react-native";

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

const HomeFavBulletin: React.FC = () => {
  const [postArray, setPostArray] = useState<string[]>([]);

  useEffect(() => {
    async function loadPostArray() {
      let PostArray: string[] = [];
      await Promise.all(
        userBulletinList.map(async (Bulletin, index) => {
          const firstPost = await firestore()
            .collection("Post")
            .doc("NormalBulletin")
            .collection(Bulletin.id)
            .orderBy("Date", "desc")
            .limit(1)
            .get();
          PostArray.push(firstPost.docs[0].data().Title);
          // firstPost.forEach((snapshot) => {
          //   // console.log(snapshot.data());
          // });
        })
      );
      setPostArray(PostArray);
    }
    loadPostArray();
  }, []);

  const renderPostArray = () => {
    if (postArray) {
      return postArray.map((post, index) => (
        <StyledFavBottomContainer key={`Bottom_${index}`}>
          <StyledFavBottomTitle>
            {userBulletinList[index].name}
          </StyledFavBottomTitle>
          <StyledFavBottomPost>{post}</StyledFavBottomPost>
        </StyledFavBottomContainer>
      ));
    }
  };

  return (
    <StyledFavContainer>
      <StyledFavTopContainer>
        <StyledFavTopText>즐겨찾는 게시판</StyledFavTopText>
        <StyledFavTopMore>
          <StyledFavTopMoreText>
            더 보기 <AntDesign name="right" size={12} />
          </StyledFavTopMoreText>
        </StyledFavTopMore>
      </StyledFavTopContainer>
      {renderPostArray()}
    </StyledFavContainer>
  );
};

export default HomeFavBulletin;
