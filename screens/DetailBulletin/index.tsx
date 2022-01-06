import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Button } from "react-native";
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
  useEffect(() => {
    setOptions({
      title: bullentinName,
      headerLeft: () => <Button title="<-" onPress={goBack} />,
    });
  }, []);

  return (
    <DetailBulletinContainer>
      <DetailBulletinText>{bullentinName}</DetailBulletinText>
    </DetailBulletinContainer>
  );
};

export default DetailBulletin;
