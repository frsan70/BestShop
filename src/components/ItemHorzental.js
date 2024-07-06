import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductsData } from '../res/data';
import Products from './Products';

const ItemHorzental = (props) => {

    const { data, title } = props
    const renderItem = ({ item }) => {
        return <Products product={item} />
    }

    return (
        <SafeAreaView style={styles.Products}>
            <View style={styles.textcover}>
            <Text style={styles.Text}>{title}</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                inverted={true}
                
                />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    Products: {
        // flex: 1,
        marginBottom:15
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        flex:1,
        height:10,
        width:30,
        fontSize: 32,
        marginTop:4,

    },
    Text:{
        fontSize: 20,
        margin:10,
        fontWeight:"bold",
        color:"black",
        marginRight:15,
        textAlign:"center",
       
        
        
    },
   textcover:{
    backgroundColor:"#42eff5",
    marginLeft:30,
    marginRight:30,
    marginTop:10,
    borderRadius:90,
   
    

   }
});


export default ItemHorzental

// const styles = StyleSheet.create({})