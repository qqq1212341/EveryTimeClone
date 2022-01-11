import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { postType } from "../../Common/commonType";
import { StackNavigatorParamList } from "../../navigators/Stack";
import { DetailBulletinContainer, DetailPostContainer } from "./style";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import PostLarge from "../../components/PostLarge";

interface DetailScreenProps {
  navigation: NativeStackNavigationProp<StackNavigatorParamList, "Detail">;
  route: RouteProp<StackNavigatorParamList, "Detail">;
}

const DetailBulletin: React.FC<DetailScreenProps> = ({
  navigation: { setOptions, goBack },
  route: {
    params: { bullentinName, bulletinId },
  },
}) => {
  const [postArray, setPostArray] = useState<postType[]>([]);
  // index가 100이면 hot 게시물을 Loading 해야 함!
  useEffect(() => {
    setOptions({
      title: bullentinName,
    });
    async function fetchPostData() {
      try {
        // postType으로 선언하면 doc.data()의 type을 지정해줘야 하기 때문에 any를 사용
        let newPostArray: any = [];
        const postData = await firestore()
          .collection("Post")
          .doc("NormalBulletin")
          .collection(bulletinId)
          .get();
        postData.forEach((doc) => {
          let docData = doc.data();
          docData = { ...docData, postId: doc.id };
          newPostArray.push(docData);
        });
        setPostArray(newPostArray);
      } catch (error) {
        Alert.alert("error", error);
      }
    }
    fetchPostData();
  }, []);

  function toDateTime(secs: number): string {
    var date = new Date(null);
    date.setSeconds(secs); // specify value for SECONDS here
    return date.toISOString().substr(0, 10);
  }

  return (
    <DetailBulletinContainer>
      {postArray &&
        postArray.map((post, index) => {
          const newDate = toDateTime(post.Date.seconds);
          return (
            <DetailPostContainer key={index}>
              <PostLarge
                postId={post.postId}
                name={post.Name}
                date={newDate}
                title={post.Title}
                desc={post.Desc}
                bulletinName={bullentinName}
              />
            </DetailPostContainer>
          );
        })}
    </DetailBulletinContainer>
  );
};

export default DetailBulletin;
