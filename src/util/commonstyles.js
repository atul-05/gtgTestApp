import {StyleSheet,Dimensions} from "react-native";


const {width,height } =  Dimensions.get("window")

export const Commonstyles = StyleSheet.create({
    contentCenter:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentWidth:{
        width: width,
    }
})