import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StackNavigatorParamList } from "../../navigators/Stack";
import { DetailBulletinContainer, DetailBulletinText } from "./style";

interface DetailScreenProps {
  navigation: NativeStackNavigationProp<StackNavigatorParamList, "Detail">;
  route: RouteProp<StackNavigatorParamList, "Detail">;
}

const DetailBulletin: React.FC<DetailScreenProps> = ({
  navigation: { setOptions, goBack },
  route: {
    params: { bullentinName, index },
  },
}) => {
  // index가 100이면 hot 게시물을 Loading 해야 함!
  useEffect(() => {
    setOptions({
      title: bullentinName,
    });
  }, []);

  return (
    <DetailBulletinContainer>
      <DetailBulletinText>{bullentinName}</DetailBulletinText>
    </DetailBulletinContainer>
  );
};

export default DetailBulletin;
