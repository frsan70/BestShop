import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Images from "../assets/images/images";
import refrigerator from "../res/data"; // Importing the data directly
import Header from "../components/Header";

const Home = () => {
  const renderProducts = () => {
    return refrigerator.map((product, index) => (
      <View key={index} style={styles.productContainer}>
        <Image style={styles.productImage} source={product.img} />
        <Text>{product.name}</Text>
        <Text>{product.modal}</Text>
        <Text>{product.price}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuHeader}>
        <Image style={styles.image} source={Images.searsh} />
        <Text style={styles.text}>BEST SHOP</Text>
        <Image style={styles.image} source={Images.menu} />
      </View>
      <ScrollView>
        {renderProducts()}


      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuHeader: {
    backgroundColor: 'grey',
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#42eff5",
  },
  image: {
    width: 50,
    height: 50,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
