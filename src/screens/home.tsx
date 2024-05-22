import React, {useEffect} from 'react';

import {Image, ImageBackground, TextInput} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {constants} from '../utils/constants';

const home = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {
      SplashScreen.hide();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.secondView}></View>

        <View style={{backgroundColor: 'white'}}></View>
        <View style={{backgroundColor: 'white', alignItems: 'center'}}>
          <ImageBackground
            source={require('../../assets/image_buy.png')}
            style={styles.buyOneImage}>
            <View style={styles.rectangle}>
              <Text style={styles.imageBackgroundText}>one free </Text>
            </View>
            <View style={styles.rectangle2}>
              <Text style={styles.imageBackgroundText}> Buy one get</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.thrdView} />

        <View style={styles.transView}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 16,
              marginTop: 24,
            }}>
            <View>
              <Text style={styles.text}>Location</Text>
              <View style={styles.rowView}>
                <Text style={styles.text}>Bilzen,Tanjungbalai</Text>
                <Image
                  tintColor={'white'}
                  source={require('../../assets/down-arrow.png')}
                  style={styles.downArrowImage}
                />
              </View>
            </View>
            <Image
              source={require('../../assets/Image_1.png')}
              style={styles.sideImage}
            />
          </View>
          <View style={styles.searchCoffeeView}>
            <Image
              tintColor={'white'}
              source={require('../../assets/loupe.png')}
              style={styles.searchIcon}
            />

            <TextInput
              style={{marginLeft: 8, flex: 10}}
              placeholder="Search Coffee"></TextInput>
            <View style={styles.filterIcon}>
              <Image
                tintColor={'white'}
                source={require('../../assets/filter.png')}
                style={styles.searchIcon}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle: {
    width: 149,
    height: 43,
    top: 90,
    backgroundColor: '#1C1C1C',
    position: 'absolute',
  },
  rectangle2: {
    width: 149,
    height: 33,
    top: 50,
    backgroundColor: '#1C1C1C',
    position: 'absolute',
  },
  imageBackgroundText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'semibold',
    backgroundColor: 'black',
    alignSelf: 'flex-start',
    borderRadius: 0.5,
    padding: 0.5,
  },
  filterIcon: {
    backgroundColor: '#C67C4E',
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buyOneImage: {
    height: 140,
    width: 315,
    position: 'static',
    top: -50,
  },
  searchCoffeeView: {
    color: '313131',
    height: 52,
    backgroundColor: '#313131',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 8,
    marginTop: 16,
    marginHorizontal: 16,

    flexDirection: 'row',
  },
  searchIcon: {
    width: 16,

    justifyContent: 'center',
    height: 16,

    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  locationView: {
    height: 50,
    width: constants.SCREEN_WIDTH,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideImage: {
    width: 44,
    justifyContent: 'center',
    height: 44,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  secondView: {
    flex: 1.2,
    backgroundColor: 'black',
  },

  downArrowImage: {
    justifyContent: 'space-between',
    alignItems: 'center',

    height: 16,
    width: 16,
    paddingHorizontal: 5,
  },
  thrdView: {
    flex: 2,
    backgroundColor: '#FFFFFF',
  },
  transView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  image: {
    width: 240,
    height: 115,
  },
});

export default home;
