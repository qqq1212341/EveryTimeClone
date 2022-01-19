import React from 'react';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { Text, TouchableOpacity } from 'react-native';

import { HomeHCircleContainer, HomeHCircleIconContainer, HomeHCircleText } from './style';

interface HomeHCircleProps {
  iconStyle?: string;
  icon: string;
  title: string;
  address: string;
}

const HomeHCircle: React.FC<HomeHCircleProps> = ({ iconStyle, icon, title, address }) => {
  const onPressButton = async () => {
    await WebBrowser.openBrowserAsync(address, {
      dismissButtonStyle: 'close',
      enableBarCollapsing: true,
    });
  };

  return (
    <HomeHCircleContainer>
      <TouchableOpacity onPress={onPressButton}>
        <HomeHCircleIconContainer>
          {iconStyle === 'Antd' ? (
            <AntDesign name={icon} size={24} color='black' />
          ) : (
            <Ionicons name={icon} size={24} color='black' />
          )}
        </HomeHCircleIconContainer>
      </TouchableOpacity>
      <HomeHCircleText>{title}</HomeHCircleText>
    </HomeHCircleContainer>
  );
};

export default HomeHCircle;
