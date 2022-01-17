import React, { RefObject, useRef, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import {
  StyledLoginBaseText,
  StyledLoginContainer,
  StyledLoginHighLightText,
  StyledLoginTextInputContainer,
  StyledLoginTopContainer,
  StyledLoginTopImage,
} from "./style";
import {
  MAIN_COLOR,
  StyledSubmitButton,
  StyledSubmitButtonText,
  StyledTextInput,
} from "../../common/commonStyle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthNavigatorParamList } from "../../navigators/Auth";

type LoginScreenProps = NativeStackScreenProps<AuthNavigatorParamList, "Login">;

const Login: React.FC<LoginScreenProps> = ({ navigation: { navigate } }) => {
  // useRef에 대한 타입을 못찾겠으...
  const passwordInput = useRef<RefObject>();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitIdEditing = () => {
    passwordInput.current.focus();
  };
  const onSubmitPasswordEditing = async () => {
    if (id === "" || password === "") {
      Alert.alert("아이디나 비밀번호를 모두 입력해주세요.");
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(id, password);
    } catch (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  };

  return (
    <StyledLoginContainer>
      <StyledLoginTopContainer>
        <StyledLoginTopImage source={require("../../img/everyTimeIcon.png")} />
        <StyledLoginBaseText>대학 생활을 더 즐겁고 편하게</StyledLoginBaseText>
        <StyledLoginHighLightText>에브리타임</StyledLoginHighLightText>
      </StyledLoginTopContainer>
      <StyledLoginTextInputContainer>
        <StyledTextInput
          placeholder="아이디"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={id}
          returnKeyType="next"
          onChangeText={(text) => setId(text)}
          onSubmitEditing={onSubmitIdEditing}
          placeholderTextColor={"rgb(171, 171, 171)"}
        />
        <StyledTextInput
          ref={passwordInput}
          placeholder="비밀번호"
          secureTextEntry
          value={password}
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={"rgb(171, 171, 171)"}
          onSubmitEditing={onSubmitPasswordEditing}
        />
        <StyledSubmitButton
          onPress={onSubmitPasswordEditing}
          buttonBackgroundColor={MAIN_COLOR}
        >
          <StyledSubmitButtonText buttonTextColor="white">
            에브라티임 로그인
          </StyledSubmitButtonText>
        </StyledSubmitButton>
        <StyledSubmitButton>
          <StyledSubmitButtonText buttonTextColor="rgb(171, 171, 171)">
            아이디/비밀번호 찾기
          </StyledSubmitButtonText>
        </StyledSubmitButton>
        <StyledSubmitButton>
          <StyledSubmitButtonText
            style={{ fontSize: 18 }}
            buttonTextColor="black"
            onPress={() => navigate("Join")}
          >
            회원가입
          </StyledSubmitButtonText>
        </StyledSubmitButton>
      </StyledLoginTextInputContainer>
    </StyledLoginContainer>
  );
};

export default Login;
