
    import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
    import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Images from '../assets/images/images';
import ScreenNames from '../../route/ScreenNames';
    
    const Header = (props) => {
       
    const {index,product} = props;
    const navigate=useNavigation()
  const goTo=()=>{
    navigate.navigate(ScreenNames.AllProuducts,{...product})}
  
        
      return (
<View style={styles.menuHeader}>
      <TouchableOpacity style={styles.box} onPress={goTo}>
        <Image style={styles.image} source={Images.searsh()} />
      </TouchableOpacity>
        <Text style={styles.text}>BEST SHOP</Text>
        <TouchableOpacity style={styles.box} onPress={goTo}>
        <Image style={styles.image} source={Images.menu()} />
        </TouchableOpacity>
</View>
      )
    }
    
    export default Header
    
    const styles = StyleSheet.create({
      menuHeader: {
        backgroundColor: 'grey',
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      text: {
        fontSize: 27,
        textAlign: "center",
        color: "#42eff5",
      },
    image: {
      width: 40,
      height: 50,
    },
    })
