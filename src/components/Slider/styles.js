import {Dimensions, StyleSheet} from "react-native";
import { color } from "../../util/colorConstanst";


const {width,height } =  Dimensions.get("window")


export const styles = StyleSheet.create({
    indicatorContainer:{
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicatorItem:{
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    indicatorInnerItem:{
        width: 15,
        height: 15,
        borderRadius: 7,
        borderWidth: 0.3,
        backgroundColor: 'transparent',
        backfaceVisibility: 'visible',
    },
    lableStyle:{
        fontSize:50,
        fontWeight:"700",
        color:color.Primary
    },
    descriptionContainer:{
        width: width-50,
        alignSelf:"center",
        paddingVertical:10,
        borderLeftWidth:4,
        borderLeftColor:color.borderLeft,
        borderRadius:2,
        paddingHorizontal:10,
        backgroundColor:"rgba(0,0,0,0.5)",
        marginTop:50
    },
    descriptiontext:{
        flexWrap: 'wrap', 
        textAlign: 'left',
        color: color.H1color
    }
})