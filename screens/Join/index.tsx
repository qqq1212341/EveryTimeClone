import React, { RefObject, useRef, useState } from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert, Keyboard, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import {
  BORDER_COLOR,
  MAIN_COLOR,
  StyledSubmitButton,
  StyledSubmitButtonText,
  StyledTextInput,
} from '../../Common/commonStyle';
import { userType } from '../../Common/commonType';

import { StyledLoginTopImage } from '../Login/style';
import {
  StyledJoinContainer,
  StyledJoinScroll,
  StyledJoinText,
  StyledJoinTextContainer,
  StyledJoinTouchable,
} from './style';

const YearSelect = [
  { label: '2022', value: '2022' },
  { label: '2021', value: '2021' },
  { label: '2020', value: '2020' },
  { label: '2019', value: '2019' },
  { label: '2018', value: '2018' },
  { label: '2017', value: '2017' },
  { label: '2016', value: '2016' },
  { label: '2015', value: '2015' },
  { label: '2014', value: '2014' },
];

const Join = () => {
  const [year, setYear] = useState<number | null>(null);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const idInput = useRef<RefObject>();
  const passwordInput = useRef<RefObject>();
  const passwordConfirmInput = useRef<RefObject>();

  const onSubmitJoin = async () => {
    if (!year || !name || !id || !password) {
      Alert.alert('양식을 전부 채워주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      Alert.alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const createdUser = await auth().createUserWithEmailAndPassword(id, password);

      await createdUser.user.updateProfile({
        displayName: name,
      });

      const userData: userType = {
        id,
        name,
        year,
        profileImage: '',
        commnetHistory: [],
        postHistory: [],
        likeList: [],
        scrabList: [],
      };

      await firestore().collection('users').doc(createdUser.user.uid).set(userData);
      Alert.alert('회원 가입을 완료하였습니다!');
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case 'auth/weak-password': {
          Alert.alert('더 어려운 비밀번호로 설정해주세요.');
          break;
        }
        case 'auth/invalid-email': {
          Alert.alert('아이디가 이메일 형식이 맞는지 확인해주세요.');
          break;
        }
        default: {
          Alert.alert(error.message);
        }
      }
    }
    setLoading(false);
  };

  return (
    <StyledJoinScroll>
      <StyledJoinTouchable onPress={Keyboard.dismiss}>
        <StyledJoinContainer>
          <StyledLoginTopImage source={require('../../img/everyTimeIcon.png')} />
          <StyledJoinTextContainer>
            <StyledJoinText>입학년도</StyledJoinText>
            <RNPickerSelect
              placeholder={{ label: '입학년도를 골라주세요.' }}
              style={pickerSelectStyles}
              value={year}
              onValueChange={value => setYear(value)}
              items={YearSelect}
            />
          </StyledJoinTextContainer>
          <StyledJoinTextContainer>
            <StyledJoinText>이름(닉네임)</StyledJoinText>
            <StyledTextInput
              value={name}
              onChangeText={text => setName(text)}
              placeholder='이름'
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='next'
              onSubmitEditing={() => idInput.current.focus()}
              placeholderTextColor={'rgb(171, 171, 171)'}
            />
          </StyledJoinTextContainer>
          <StyledJoinTextContainer>
            <StyledJoinText>아이디(이메일)</StyledJoinText>
            <StyledTextInput
              ref={idInput}
              value={id}
              onChangeText={text => setId(text)}
              placeholder='아이디'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='next'
              onSubmitEditing={() => passwordInput.current.focus()}
              placeholderTextColor={'rgb(171, 171, 171)'}
            />
          </StyledJoinTextContainer>
          <StyledJoinTextContainer>
            <StyledJoinText>비밀번호</StyledJoinText>
            <StyledTextInput
              ref={passwordInput}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder='비밀번호'
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='next'
              onSubmitEditing={() => passwordConfirmInput.current.focus()}
              placeholderTextColor={'rgb(171, 171, 171)'}
            />
          </StyledJoinTextContainer>
          <StyledJoinTextContainer>
            <StyledJoinText>비밀번호 확인</StyledJoinText>
            <StyledTextInput
              ref={passwordConfirmInput}
              value={passwordConfirm}
              onChangeText={text => setPasswordConfirm(text)}
              placeholder='비밀번호 확인'
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='done'
              onSubmitEditing={onSubmitJoin}
              placeholderTextColor={'rgb(171, 171, 171)'}
            />
          </StyledJoinTextContainer>
          <StyledJoinTextContainer>
            <StyledSubmitButton onPress={onSubmitJoin} buttonBackgroundColor={MAIN_COLOR}>
              <StyledSubmitButtonText buttonTextColor='white'>회원 가입하기</StyledSubmitButtonText>
            </StyledSubmitButton>
          </StyledJoinTextContainer>
        </StyledJoinContainer>
      </StyledJoinTouchable>
    </StyledJoinScroll>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    width: '100%',
    color: '#000000',
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  inputAndroid: {
    fontSize: 16,
    width: '100%',
    color: '#000000',
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});

export default Join;
