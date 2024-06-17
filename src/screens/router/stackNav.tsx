import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductWrapper from '../ProductWrapper';
import UserList from '../userList';

const Stack=createNativeStackNavigator();

const StackNav = () => {
  
  return (
    
      <Stack.Navigator>
        <Stack.Screen name='StackNav'  component={ProductWrapper}/> 
        <Stack.Screen name='User'  component={UserList}/> 

      </Stack.Navigator>

  );
};


export default StackNav;
