import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StackNavigatorParamList } from "../../navigators/Stack";
import {
  DetailBulletinContainer,
  DetailBulletinText,
  DetailHeaderIconContainer,
} from "./style";
import { AntDesign } from "@expo/vector-icons";

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
  useEffect(() => {
    setOptions({
      title: bullentinName,
      headerLeft: () => (
        <DetailHeaderIconContainer onPress={goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </DetailHeaderIconContainer>
      ),
    });
  }, []);

  return (
    <DetailBulletinContainer>
      <DetailBulletinText>{bullentinName}</DetailBulletinText>
    </DetailBulletinContainer>
  );
};

export default DetailBulletin;
