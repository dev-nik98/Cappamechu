import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'right',
          padding: 5,
          backgroundColor: 'lightblue',
        }}>
        <View style={{backgroundColor:'grey',borderRadius:15,height:30,width:30}}>
          <Text style={{fontSize:23}}> {cartItems}</Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default Header;
