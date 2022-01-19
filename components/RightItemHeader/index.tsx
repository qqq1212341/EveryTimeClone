import React, { ReactElement } from 'react';

import { GestureResponderEvent } from 'react-native';

import { StyledItemIcon, StyledRightItemHeaderContainer } from './style';

interface RightItemHeaderProps {
  isFirstItem: boolean;
  firstItemComponent?: ReactElement;
  onPressFirstItem?: (event: GestureResponderEvent) => void;
  secondItemComponent: ReactElement;
  onPressSecondItem: (event: GestureResponderEvent) => void;
}

const RightItemHeader: React.FC<RightItemHeaderProps> = ({
  isFirstItem,
  firstItemComponent,
  onPressFirstItem,
  secondItemComponent,
  onPressSecondItem,
}) => {
  return (
    <StyledRightItemHeaderContainer>
      {isFirstItem && (
        <StyledItemIcon onPress={onPressFirstItem}>{firstItemComponent}</StyledItemIcon>
      )}
      <StyledItemIcon onPress={onPressSecondItem}>{secondItemComponent}</StyledItemIcon>
    </StyledRightItemHeaderContainer>
  );
};

export default RightItemHeader;
