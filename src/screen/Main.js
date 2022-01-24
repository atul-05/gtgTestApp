import React from "react";
import {View,StyleSheet,ImageBackground ,Image,Text, useWindowDimensions, Dimensions} from "react-native";
import url from "../images"
import { formateDate } from "../util/util";
import Silder from "../components/Slider/slider";
import { color } from "../util/colorConstanst";
const {width,height } =  Dimensions.get("window")

export default SilderApp =(props)=>{


     return (
       <ImageBackground source={url.bgImage} style ={styles.container}>
          
               <Image source={url.topRightBorder} style={styles.topRightImage}/>
        
           <View style={{flex:0.4,top:100}}> 
               <Image source={url.logo} style={[styles.imageStyle,{width,marginVertical:10}]}/>
               <View style={styles.rowImage}>
           <View style={{width:"15%",paddingTop:6,marginLeft:10}}>
           <Image source={url.calender} style={[{width:35,height:35}]}/>
           </View>
           <View style={styles.H3headeing}>
           <Text style={{fontSize:16,color:color.H1color}}>{formateDate()}</Text>
           </View>  
           </View>
           </View>
           
           <View style={{flex:0.7,}}>
           <Silder/>
           </View>
          
       </ImageBackground>
     )
} 





const styles = StyleSheet.create({
    container :{
       flex:1,
    },
    imageStyle:{
        // width:'100%',
        height:50,
        resizeMode:"contain"
    },

    rowImage:{
        width:width/2,
           alignSelf:"center",
           borderRadius:5,
           flexDirection:"row",
           
           justifyContent:"center",
           alignItems:"center",
           backgroundColor:"rgba(0,0,0,0.5)"
    },
    topRightImage:{height:8,
        resizeMode: "contain",
        position:"absolute",
        top:0,
        right:10},
    H3headeing:{
        width:"80%",
        justifyContent:"flex-start",
        paddingLeft:3,
        // backgroundColor:"rgba(0,0,0,0.5)",
        paddingVertical:10,
        marginLeft: 10
    }
})