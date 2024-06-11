import React from 'react';
import {StyleSheet, View} from 'react-native';

const as1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lightGreyBox} />

      <View style={styles.blueBox} />

      <View style={styles.lightGreyBox} />
      <View style={styles.orangeBox}>
        <View style={styles.firstBox} />
        <View style={styles.secondBox} />
        <View style={styles.thirdBox} />
      </View>
      
        
      <View style={styles.greyBox}>
        
        </View>
        <View style={styles.pinkBox}>
        </View>
</View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greyBox:{
    flex:2,
borderColor:'black',
borderWidth:2,

  },
  firstBox: {
    flex: 1,
    borderColor: 'black',
   borderRightWidth:5,
   borderTopWidth:5,
   borderBottomWidth:5
  },
  secondBox: {
    flex: 4,
    borderColor: 'black',
    borderWidth: 5,
  },
  thirdBox: {
    flex: 1,
    borderColor: 'black',
   borderLeftWidth:5,
    borderTopWidth:5,
    borderBottomWidth:5
  },
  lightGreyBox: {
    flex: 1.5,
    backgroundColor: 'lightgrey',
  },
  blueBox: {
    flex: 5,
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
  },
  lightBlueBox: {
    flex: 5,
    backgroundColor: 'lightblue',
    borderColor: 'black',
    borderTopWidth:5,
    borderBottomWidth:5
  },
  orangeBox: {
    flex: 8,
    backgroundColor: 'orange',
    borderColor: 'black',
    
    flexDirection: 'row',
  },
  pinkBox: {
    flex: 2,
    backgroundColor: 'pink',
    borderColor: 'black',
    flexDirection: 'row',
  },
});
export default as1;
