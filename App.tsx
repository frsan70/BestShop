import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './route/nav'
import MenuDrawer from './route/MenuDrawer'

const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.test}>test</Text>
     {/* <MainNavigation/> */} 
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
  flex:1,
  height:10,
  backgroundColor:"#1F2122",
  },
  test:{
    fontSize:30,
    alignSelf:'center',
    color:"white"
  }
})