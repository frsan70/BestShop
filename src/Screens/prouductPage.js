import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProusuctPage = (props) => {
    const prouduct=props.route.params
    // console.log(prouduct);
    
  return (
    <View>
      <ScrollView>
      <Header/>
         <View style={styles.productContainer}>
        <Image style={styles.productImage} source={prouduct.img} />
        <Text style={styles.text}>{prouduct.modal}</Text>
        <Text style={styles.text}>{prouduct.name}</Text>
        <Text style={styles.text}>{prouduct.id}</Text>
      </View>
      <Text style={styles.textcover}>{prouduct.price}</Text>
    </ScrollView>
    </View>
  )
}

export default ProusuctPage


const styles = StyleSheet.create({
    productContainer: {
        flexDirection:'column-reverse',
        alignItems: 'stretch',
        padding: 10,
        // borderBottomWidth: 3,
        // borderBottomColor: "#42eff5",
      },
      productImage: {
        width: 400,
        height: 400,
        marginRight: 10,
        alignSelf:"center",
        flexDirection:"column"
        
      },
      text: {
        // marginTop: 0,
        fontSize: 27,
        textAlign: "center",
        color: "#42eff5",
      },
      textcover:{
        fontSize:20,
        backgroundColor:"#42eff5",
        marginLeft:120,
        marginRight:210,
        marginTop:10,
        borderRadius:90,
       
        
    
       }
      
     
      
      
})