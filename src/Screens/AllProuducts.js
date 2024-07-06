import { NativeModules, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AllProuducts = (props) => {

    const category = props.route.params.category
    const AllProuductsData =[
        {
            name:"תנור בנוי Dual Cooking סמסונג דגם ",
            modal:'NV75K5541RB',
            price:'1790₪',
            img: require('../assets/images/NV75K5541RB.png'), // Provide the correct relative path to the image
        },
        {
            name:'תנור בנוי פירוליטי Dual Cooking של סמסונג בנפח ענק 75 ליטר',
            modal:'NV75K5571RS',
            price:'3590₪',
            img: require('../assets/images/NV75K5541RS.png')
        },
        {
            name:'תנור בנוי פירוליטי Dual Cook Flex בנפח 75 ליטר עם חיבור Wifi ושליטה דרך אפליקציה',
            modal:'NV75N7677RS',
            price:'4390₪',
            img: require('../assets/images/NV7677.png')
        },
        {
            name:' כיריים אינדוקציה Power control, סדרת הכיריים המאפשרת חיבור לכל סוגי השקעים',
            modal:'NZ64N7757FK',
            price:'3190₪',
            img: require('../assets/images/NZ64N7757FK.png')
        },
        {
            name:'מקרר 4 דלתות בנפח 530 ליטר',
            modal:'GR-B618SE',
            price:'6990₪',
            img: require('../assets/images/GRB618SE.jpeg'), // Provide the correct relative path to the image
        },
        {
            name:'מקרר 3 דלתות בנפח 816 ליטר',
            modal:'GR-B265MM',
            price:'9490₪',
            img: require('../assets/images/GRB265MM.jpeg'), // Provide the correct relative path to the image
        },
        {
            name:'מקרר מקפיא עליון Samsung אינוורטר',
            modal:'RT62K7044SL',
            price:'6790₪',
            img: require('../assets/images/RT62K7045SL.png'), // Provide the correct relative path to the image
        },
    
    

    ]
    

  return (
    <View>
      <Text>AllProuducts</Text>
    </View>
  )
}

export default AllProuducts

const styles = StyleSheet.create({})