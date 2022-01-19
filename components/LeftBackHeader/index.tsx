import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';

import { SCHOOL_NAME } from '../../Common/commonStyle';

import {
  StyledLeftBackButtonContainer,
  StyledLeftBackHeaderContainer,
  StyledLeftBackTextBlack,
  StyledLeftBackTextContainer,
  StyledLeftBackTextGray,
} from './style';

const LeftBackHeader = ({
  bulletinName,
  onPress,
}: {
  bulletinName: string;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <StyledLeftBackHeaderContainer>
      <StyledLeftBackButtonContainer onPress={onPress}>
        <AntDesign name='arrowleft' size={24} color='black' />
      </StyledLeftBackButtonContainer>
      <StyledLeftBackTextContainer>
        <StyledLeftBackTextBlack>{bulletinName}</StyledLeftBackTextBlack>
        <StyledLeftBackTextGray>{SCHOOL_NAME}</StyledLeftBackTextGray>
      </StyledLeftBackTextContainer>
    </StyledLeftBackHeaderContainer>
  );
};

export default LeftBackHeader;
