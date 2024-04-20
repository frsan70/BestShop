import {StyleSheet, View, Image } from 'react-native';
import React from 'react';
import Images from '../assets/images/images';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../route/ScreenNames';


const Splash = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.replace(ScreenNames.home);
  },3000);

  return (
    <View style={styles.background}>
      <Image style={styles.image} source={Images.logo_splach()}/>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    // flex: 1,
    height:"50%",
    width:"100%",
    borderRadius:100
    // resizeMode:'center'
  },
});
