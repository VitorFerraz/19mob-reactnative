import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import HeaderIcon from '../assets/header.png'
import Style from './Style'

const HeaderiOS = () => {
    return (
      <View style={ { ...Style.container, backgroundColor: "#3c74d7" }  }>
        <Image
          resizeMode="contain"
          style={Style.image}
          source={HeaderIcon}
        />
      </View>
    );
}   

export default HeaderiOS;