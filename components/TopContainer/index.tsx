import React from "react";
import { StyledTopContainer, StyledTopMore, StyledTopMoreText } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { StyledTopText } from "../../Common/commonStyle";
import { GestureResponderEvent } from "react-native";

interface TopContainerProps {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  isMore: boolean;
}

const TopContainer: React.FC<TopContainerProps> = ({
  text,
  onPress,
  isMore,
}) => {
  return (
    <StyledTopContainer>
      <StyledTopText>{text}</StyledTopText>
      {isMore && (
        <StyledTopMore onPress={onPress}>
          <StyledTopMoreText>
            더 보기 <AntDesign name="right" size={12} />
          </StyledTopMoreText>
        </StyledTopMore>
      )}
    </StyledTopContainer>
  );
};

export default TopContainer;
