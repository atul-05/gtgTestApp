import React,{useState} from 'react';
import {View, FlatList, Text, Image, useWindowDimensions} from 'react-native';
import url from '../../images';
import customData from '../../json/sample.json';
import { color } from '../../util/colorConstanst';
import {Commonstyles} from '../../util/commonstyles';
import  {styles} from "./styles";



export default Silder = props => {
  const {width, height} = useWindowDimensions();
  const [selectedIndex,setSelectedIndex] = useState(0)
  const getUrl = item => {
    return url[item];
  };

  const indicator = (index) => (
    <View
      key={index.toString()}
      style={[styles.indicatorItem,{
        backgroundColor: index == selectedIndex ? color.Primary : color.inActivedots,
        marginHorizontal: index %2==0 ? 5 : 0,
      },Commonstyles.contentCenter]}>
      <View style={styles.indicatorInnerItem}/>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <View style={{width: width, flexWrap: 'wrap',}}>
        <View
          style={[Commonstyles.contentCenter,Commonstyles.contentWidth]}>
          <Image
            source={getUrl(item.sport)}
            style={{width: 100, height: 100}}
          />
           <View style={[Commonstyles.contentCenter,Commonstyles.contentWidth]}>
          <Text style={styles.lableStyle}>{item.sport}</Text>
        </View>
        </View>
       
        <View style={[styles.descriptionContainer,Commonstyles.contentCenter]}>
          <Text style={styles.descriptiontext}>{item.fact}</Text>
        </View>
      </View>
    );
  };




  const onViewRef = React.useRef(({viewableItems,changed})=>{
      console.log(viewableItems);
    if(viewableItems){
        console.log("hi",viewableItems[0].index)
        setSelectedIndex(viewableItems[0].index)
    }
  })
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  return (
    customData && (
      <View style={{flex:1}}>
        <View style={{flex:0.7,}}>
        <FlatList
          horizontal
          pagingEnabled
          style={{ flex:1,}}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          keyExtractor={(item, index) => index.toString()}
          data={customData.content}
          renderItem={renderItem}
        />
        </View>

        <View style={{flex:0.2}}>
        <View
          style={styles.indicatorContainer}>
          {customData.content.map((item, index) => indicator(index))}
        </View>
        </View>
      </View>
    )
  );
};
