import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ScreenNames from "../../route/ScreenNames"
import { ProductsData } from "../res/data"
import Products from "./Products"

const FilterTabs = (props) =>{
    const {tab} = props
    const navigate=useNavigation() 
    console.log('hgggg ' , tab);
    const goTo=()=>{
        navigate.navigate(ScreenNames.AllProuducts,{category:tab.name})
    }
    return(
        <TouchableOpacity style={styles.FilterTabs}onPress={goTo}>
        <View style={styles.container}>
        <View style={styles.imgcover}>
        <Image style={styles.img}source={tab.Image}/>
        <Text style={styles.name}>{tab.name}</Text>
        </View>

    </View>
    </TouchableOpacity>
)
}
export default FilterTabs
const styles = StyleSheet.create({
    container:{
        margin:6,
        width:100,
       alignItems:'center',
       justifyContent:"center",
    //    flexDirection:'column',
        
    },
    img:{
        height:35,
        width:35,
        // marginBottom:10,
        // resizeMode:"contain",
        
        
    },
    name:{
        fontSize:12,
        fontWeight:"bold",
        color:"black",
        textAlign:"center",
        flexWrap:"wrap",
        marginTop:2,
    },
    imgcover:{
        height:90,
        width:90,
        backgroundColor:"#42eff5",
        alignItems:'center',
       justifyContent:"center",
       borderRadius:90,
    }
})