import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HeaderIcon from '../assets/header.png'
import Style from './Style'

const HeaderAndroid = () => {
  return (
    <View style={ { ...Style.container, backgroundColor: "#93bb3a" }  }>
      <Image
        resizeMode="contain"
        style={Style.image}
        source={HeaderIcon}
      />
    </View>
  );
}   
export default HeaderAndroid;