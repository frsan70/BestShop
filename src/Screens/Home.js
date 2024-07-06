import React from "react";
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Images from "../assets/images/images";
// import refrigerator from "../res/data"; // Importing the data directly
import Header from "../components/Header";
import Products from "../components/Products";
import { filterTabs } from "../res/filterdata";
import FilterTabs from "../components/FilterTabs";
import { ProductsData, refrigerator } from "../res/data";
import ItemHorzental from "../components/ItemHorzental";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const Home = (props) => {
  const renderProducts = () => {
    return ProductsData.map((product, index) => (
        <ItemHorzental key={index} data={product.data} title={product.name} />

      ))
  };

  const renderFilterTabs = () => {

    return (

      <ScrollView style={styles.FilterTabs} horizontal>
        {filterTabs.map((tab, index) =>
          <FilterTabs tab={tab} key={index} />
        )}

      </ScrollView>

    )

  }
  
    const {index,product} = props;
    const navigate=useNavigation()
  const goTo=()=>{
    navigate.navigate(ScreenNames.ProuductPage,{...product})}

  return (
    <ImageBackground source={Images.rek3()} resizeMode="cover" style={styles.backgroundimage}>
    <ScrollView style={styles.container}>
    <Header/> 

      {renderFilterTabs()}

      {/* <SafeAreaView style={styles.Products} horizontal> */}
        {renderProducts()}
      {/* </SafeAreaView> */}
  
     </ScrollView>
     </ImageBackground>

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
  backgroundimage:{
    flex:1,
    justifyContent:"center"
  },
  FilterTabs: {
    flexDirection: 'row',
    height: 100,
    marginTop:10
   

  },
  Products: {
    margin: 7,

  },
});
