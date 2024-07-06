import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenNames from "../../route/ScreenNames";
import Sizes from "../res/sizes";

const Products = (props) => {
  const {index,product} = props;
  const navigate=useNavigation()

  const goTo=()=>{
    navigate.navigate(ScreenNames.ProuductPage,{...product})
  }

  return(
    <TouchableOpacity style={styles.box} onPress={goTo}>
      <View style={styles.productContainer}>
        <Image style={styles.productImage} source={product.img} />
        <Text style={styles.textName}>{product.modal}</Text>
        <Text>{product.name}</Text>
      </View>
      <Text>{product.price}</Text>
      </TouchableOpacity>
  )
  };

  export default Products;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection:'column',
    alignItems: 'stretch',
    padding: 10,
    Color: "#42eff5",
   
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    alignSelf:"center"
  },
  box:{
    backgroundColor:"#bfbfbf",
    borderRadius: 30,
    paddingHorizontal:15,
    borderWidth:4,
    borderColor: "#42eff5",

    width: Sizes.screenWidth * 0.38,
    marginLeft: 10,
    marginTop:10
    
  },
 
  textName:{
    fontSize:18,
    margin:0
  }
});

