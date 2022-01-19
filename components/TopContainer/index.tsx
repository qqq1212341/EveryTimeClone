import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';

import { StyledTopText } from '../../Common/commonStyle';

import { StyledTopContainer, StyledTopMore, StyledTopMoreText } from './style';

interface TopContainerProps {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  isMore: boolean;
}

const TopContainer: React.FC<TopContainerProps> = ({ text, onPress, isMore }) => {
  return (
    <StyledTopContainer>
      <StyledTopText>{text}</StyledTopText>
      {isMore && (
        <StyledTopMore onPress={onPress}>
          <StyledTopMoreText>
            더 보기 <AntDesign name='right' size={12} />
          </StyledTopMoreText>
        </StyledTopMore>
      )}
    </StyledTopContainer>
  );
};

export default TopContainer;
