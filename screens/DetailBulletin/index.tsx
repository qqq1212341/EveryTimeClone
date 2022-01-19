import React, { useEffect, useState } from 'react';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import firestore from '@react-native-firebase/firestore';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { Alert, FlatList } from 'react-native';

import LeftBackHeader from '../../components/LeftBackHeader';
import PostLarge from '../../components/PostLarge';
import RectangleAd from '../../components/RectangleAd';
import RightItemHeader from '../../components/RightItemHeader';

import { StackNavigatorParamList } from '../../navigators/Stack';

import { postType } from '../../Common/commonType';

import { DetailPostContainer } from './style';

interface DetailBulletinProps {
  navigation: NativeStackNavigationProp<StackNavigatorParamList, 'DetailBulletin'>;
  route: RouteProp<StackNavigatorParamList, 'DetailBulletin'>;
}

const DetailBulletin: React.FC<DetailBulletinProps> = ({
  navigation: { setOptions, goBack },
  route: {
    params: { bulletinName, bulletinId },
  },
}) => {
  const [postArray, setPostArray] = useState<postType[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  useEffect(() => {
    setOptions({
      headerLeft: () => <LeftBackHeader bulletinName={bulletinName} onPress={goBack} />,
      headerRight: () => (
        <RightItemHeader
          isFirstItem={true}
          firstItemComponent={<AntDesign name={'search1'} size={24} color='black' />}
          // onPressFirstItem => search 스크린으로 이동하며 게시판의 params를 넘겨줘야함
          secondItemComponent={
            <MaterialCommunityIcons name='dots-vertical' size={24} color='black' />
          }
          // onPressSecondItem : table 열기
        />
      ),
      headerShadowVisible: false,
    });
    fetchPostData();
  }, []);
  // bulletinId가 Hot이면 hot 게시물을 Loading 해야 함!
  async function fetchPostData() {
    try {
      // postType으로 선언하면 doc.data()의 type을 지정해줘야 하기 때문에 any를 사용
      const newPostArray: any = [];
      const postData = await firestore()
        .collection('Post')
        .doc('NormalBulletin')
        .collection(bulletinId)
        .get();
      postData.forEach(doc => {
        let docData = doc.data();
        docData = { ...docData, postId: doc.id };
        newPostArray.push(docData);
      });
      setPostArray(newPostArray);
    } catch (error) {
      Alert.alert('error', error);
    }
  }

  const onRefesh = () => {
    setRefreshing(true);
    fetchPostData();
    setRefreshing(false);
  };

  if (!postArray) return <AppLoading />;
  return (
    <>
      <FlatList
        data={postArray}
        ListHeaderComponent={<RectangleAd marginTop={10} />}
        onRefresh={onRefesh}
        refreshing={refreshing}
        keyExtractor={(item: postType) => item.postId}
        renderItem={({ item }) => (
          <DetailPostContainer>
            <PostLarge postData={item} bulletinName={bulletinName} />
          </DetailPostContainer>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default DetailBulletin;
