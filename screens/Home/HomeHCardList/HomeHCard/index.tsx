import React from 'react';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  StyledHCardContainer,
  StyledHCardInnerBottomText,
  StyledHCardInnerButton,
  StyledHCardInnerButtonText,
  StyledHCardInnerContainer,
  StyledHCardInnerRightContainer,
  StyledHCardInnerTopText,
} from './style';

interface HomeHCardProps {
  icon: string;
  topText: string;
  bottomText: string;
  bottomTextColor: string;
  buttonText?: string;
}

const HomeHCard: React.FC<HomeHCardProps> = ({
  icon,
  topText,
  bottomText,
  bottomTextColor,
  buttonText,
}) => {
  return (
    <StyledHCardContainer>
      <StyledHCardInnerContainer>
        <MaterialCommunityIcons name={icon} size={36} color='black' />
        <StyledHCardInnerRightContainer>
          <StyledHCardInnerTopText>{topText}</StyledHCardInnerTopText>
          <StyledHCardInnerBottomText bottomTextColor={bottomTextColor}>
            {bottomText}
          </StyledHCardInnerBottomText>
          {buttonText && (
            <StyledHCardInnerButton>
              <StyledHCardInnerButtonText>
                {buttonText}&nbsp;
                <AntDesign name='right' size={12} color='rgb(188, 188, 188)' />
              </StyledHCardInnerButtonText>
            </StyledHCardInnerButton>
          )}
        </StyledHCardInnerRightContainer>
      </StyledHCardInnerContainer>
    </StyledHCardContainer>
  );
};

export default HomeHCard;
