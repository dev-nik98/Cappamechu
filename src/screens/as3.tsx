import React from 'react';
import {StyleSheet, View} from 'react-native';

const As1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greyBox} />
      <View style={styles.blueBox} />
      <View style={{flex: 2, borderWidth: 2, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 3, borderWidth: 2, flexDirection: 'column'}}>
          <View style={{flex: 1, backgroundColor: 'pink',borderBottomWidth:3}} />
          <View style={{flex: 1, backgroundColor: 'green'}} />
        </View>
      </View>
      <View style={{flex: 2, borderWidth: 2, flexDirection: 'row'}}>
        <View style={{flex: 5, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'pink', borderLeftWidth: 2}} />
      </View>
      <View style={{flex: 2, borderWidth: 2, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 3, borderWidth: 2, flexDirection: 'column'}}>
          <View style={{flex: 1, backgroundColor: 'pink',borderBottomWidth:3}} />
          <View style={{flex: 1, backgroundColor: 'green'}} />
        </View>
        </View>
        <View style={{flex: 2, borderWidth: 2, flexDirection: 'row'}}>
        <View style={{flex: 5, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'pink', borderLeftWidth: 2}} />
      </View>
      <View style={styles.lightblueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  greyBox: {
    flex: 1,
    backgroundColor: 'grey',
  },
  lightblueBox: {
    flex: 3,
    backgroundColor: 'lightblue',

    borderTopWidth: 5,
    borderBottomWidth: 5,
  },
  blueBox: {
    flex: 4,
    backgroundColor: 'blue',

    borderTopWidth: 5,
    borderBottomWidth: 5,
  },
});
export default As1;