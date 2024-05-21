import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {i18n} from '../localization';
import {images} from '../utils/images';

import SplashScreen from 'react-native-splash-screen'


const Login = () => {
  const clickGoogleButton = () => {
    setIsEn(bool => !bool);
  };
  const {coffeeBackgroundImage, googleIcon} = images;
  const [isEN, setIsEn] = useState(true);
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    const unsubscribe = i18n.onChange(() => {
      // do something
    });
  



    return () =>{
      SplashScreen.hide()
      unsubscribe}
  }, []);
  
  useEffect(() => {
    console.log("I18n has been updated!");
  }, [i18n.version]);

  useEffect(() => {
   
    if (isEN) {
      i18n.defaultLocale = 'en';
      i18n.locale = 'en';
    } else {
      i18n.defaultLocale = 'fr';
      i18n.locale = 'fr';
    }
    setRefresh(bool => !bool)
  }, [isEN]);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#000000']}
        style={styles.linearGradient}>
        <ImageBackground
          source={coffeeBackgroundImage}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
        <View style={styles.details}>
          <Text style={styles.coffeeText}>{i18n.t('coffeeSoGood')}</Text>
          <Text style={styles.bestGrainText}>{i18n.t('bestGrain')}</Text>
        </View>
        <TouchableOpacity style={styles.googleBtn} onPress={clickGoogleButton}>
          <View style={styles.googleBtn}>
            <Image source={googleIcon} style={styles.logo} />
            <Text style={styles.textGoogleBtn}>
              {i18n.t('continueWithGoogle')}
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coffeeText: {
    fontSize: 34,
    fontWeight: 'semibold',
    textAlign: 'center',
    marginHorizontal: 30,
  },
  textGoogleBtn: {
    color: 'rgba(0,0,0,0.54)',
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  googleBtn: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 25,
    justifyContent: 'center',
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',

    textAlignVertical: 'center',
  },
  bestGrainText: {
    color: '#A9A9A9',
    marginHorizontal: 30,
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center',

    fontWeight: 'regular',
  },

  details: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },

  image: {
    flex: 2,
    justifyContent: 'center',
  },
  logo: {
    padding: 10,
    width: 24,
    height: 24,
  },
});

export default Login;
