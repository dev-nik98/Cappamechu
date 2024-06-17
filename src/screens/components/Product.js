import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action';

const Product = props => {
  const item = props.item;

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    console.warn('call', item);
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name));
    
  };

  useEffect(() => {
   let result=cartItems.filter((element)=>{
return element.name=== item.name

   });


if(result.length){
    setIsAdded(true)
}else{
    setIsAdded(false)
}

},[cartItems])
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        padding: 5,
      }}>
      <Text style={{color: 'black', fontSize: 20}}>{item.name}</Text>
      <Text style={{color: 'black', fontSize: 20}}>{item.price}</Text>
      <Text style={{color: 'black', fontSize: 20}}>{item.color}</Text>
      <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
      {
        isAdded?
        <Button title="Remove tO Cart" onPress={() => handleRemoveFromCart(item)} />
:
<Button title="Add tO Cart" onPress={() => handleAddToCart(item)} />

      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
