import React, { useState } from "react";
import {
  StyledCheckBoxContainer,
  StyledCheckBoxIcon,
  StyledCheckBoxText,
  StyledCreateCommentContainer,
  StyledInputContainer,
  StyledSubmitContainer,
  StyledTextInputContainer,
} from "./style";
import { Ionicons } from "@expo/vector-icons";
import {
  DARK_BACKGROUND_COLOR,
  GRAY_COLOR,
  MAIN_COLOR,
  StyledSubmitButton,
  StyledTextInput,
} from "../../common/commonStyle";
import { TextInput, View } from "react-native";

const CreateComment = () => {
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  return (
    <StyledCreateCommentContainer>
      <StyledInputContainer>
        <StyledCheckBoxContainer>
          <StyledCheckBoxIcon onPress={() => setIsAnonymous((prev) => !prev)}>
            {isAnonymous ? (
              <Ionicons name="checkbox" size={18} color={MAIN_COLOR} />
            ) : (
              <Ionicons name="checkbox-outline" size={18} color={MAIN_COLOR} />
            )}
          </StyledCheckBoxIcon>
          <StyledCheckBoxText>익명</StyledCheckBoxText>
        </StyledCheckBoxContainer>
        <StyledTextInputContainer>
          <StyledTextInput
            placeholder="댓글을 입력하세요."
            placeholderTextColor={GRAY_COLOR}
          />
        </StyledTextInputContainer>
        <StyledSubmitContainer>
          <StyledSubmitButton>
            <View style={{ backgroundColor: DARK_BACKGROUND_COLOR }}>
              <Ionicons
                name="ios-paper-plane-outline"
                size={24}
                color={MAIN_COLOR}
              />
            </View>
          </StyledSubmitButton>
        </StyledSubmitContainer>
      </StyledInputContainer>
    </StyledCreateCommentContainer>
  );
};

export default CreateComment;
