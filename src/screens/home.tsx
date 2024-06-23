import React, {useEffect, useState} from 'react';

import {
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {StyleSheet, Button, FlatList, View, Text} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Cappuccino',
    price: '$2.99',
    image: require('../../assets/capp.png'),
    isSelected: true,
  },
  {
    id: '2',
    name: 'Machiato',
    price: '$9.9',
    image: require('../../assets/mach.png'),
    isSelected: false,
  },
  {
    id: '3',
    name: 'Latte',
    price: '$1.69',
    image: require('../../assets/latte.png'),
    isSelected: false,
  },
  {
    id: '4',
    name: 'Americano',
    price: '$6.99',
    image: require('../../assets/capp.png'),
    isSelected: false,
  },
  {
    id: '5',
    name: 'Macha ',
    price: '$19.9',
    image: require('../../assets/mach.png'),
    isSelected: false,
  },
];

const flatListproducts = [
  {
    image: require('../../assets/capp.png'),
    id: '1',
    name: 'Cappuccino',
    price: '$2.99',

    isSelected: true,
  },
  {
    id: '2',
    name: 'Machiato',
    price: '$9.9',
    image: require('../../assets/mach.png'),
    isSelected: false,
  },
  {
    id: '3',
    name: 'Latte',
    price: '$1.69',
    image: require('../../assets/latte.png'),
    isSelected: false,
  },
  {
    id: '4',
    name: 'Americano',
    price: '$6.99',
    image: require('../../assets/capp.png'),
    isSelected: false,
  },
  {
    id: '5',
    name: 'Macha ',
    price: '$19.9',
    image: require('../../assets/mach.png'),
    isSelected: false,
  },
  {
    image: require('../../assets/capp.png'),
    id: '1',
    name: 'Cappuccino',
    price: '$2.99',

    isSelected: true,
  },
  {
    id: '2',
    name: 'Machiato',
    price: '$9.9',
    image: require('../../assets/mach.png'),
    isSelected: false,
  },
  {
    id: '3',
    name: 'Latte',
    price: '$1.69',
    image: require('../../assets/latte.png'),
    isSelected: false,
  },
  {
    id: '4',
    name: 'Americano',
    price: '$6.99',
    image: require('../../assets/capp.png'),
    isSelected: false,
  },
  {
    id: '5',
    name: 'Macha ',
    price: '$19.9',
    image: require('../../assets/mach.png'),
    isSelected: false,
  },
];

const Home = () => {
  

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.item,
        {backgroundColor: selectedId === item.id ? '#C67C4E' : '#F3F3F3'},
      ]}
      onPress={() => setSelectedId(item.id)}>
      <Text
        style={[
          styles.flatListProductName,
          {color: selectedId === item.id ? 'white' : 'black'},
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  const flatListRenderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.coffeeListItem,
        {backgroundColor: selectedId === item.id ? '#C67C4E' : '#F3F3F3'},
      ]}
      onPress={() => setSelectedId(item.id)}>
      <View
        style={{
          backgroundColor: 'red',
          height: 160,
          overflow: 'hidden',
          width: '100%',
          borderRadius: 12,
        }}>
        <ImageBackground
          resizeMode="cover"
          style={{height: 160, width: '100%'}}
          source={item.image}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/star.png')}
              style={styles.starImage}
            />
            <Text style={styles.startext}>4.0</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{height: 90, width: '100%',marginTop:8}}>
        <Text
          style={[
            {
              marginHorizontal: 8,
              color: selectedId === item.id ? 'white' : 'black',
            },
          ]}>
          {item.name}
        </Text>
        <Text style={{color: '#9B9B9B', fontSize: 12, marginHorizontal: 8}}>
          with Chocolate
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <Text
            style={{color: '#2F4B4E', fontSize: 12, fontWeight: 'bold'}}>
            $4.53
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.secondView}></View>
        <View style={styles.thrdView} />
        <View style={styles.transView}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 16,
              marginTop: 32,
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
          <View
            style={{
              marginHorizontal: 16,
              borderRadius: 12,
              overflow: 'hidden',
              marginTop: 32,
            }}>
            <ImageBackground
              source={require('../../assets/image_buy.png')}
              style={styles.buyOneImage}>
              <View>
                <Image
                  source={require('../../assets/promo.png')}
                  style={styles.promo}
                />
              </View>
              <View style={styles.rectangle}>
                <Text style={styles.imageBackgroundText}>Buy one get </Text>
              </View>
              <View style={styles.rectangle2}>
                <Text style={styles.imageBackgroundText}> one free</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{marginHorizontal: 16}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{flex: 1, marginTop: 10, marginHorizontal: 10}}>
            <FlatList
              numColumns={2}
              data={flatListproducts}
              renderItem={flatListRenderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={{paddingBottom: 20}}
            />
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
  button: {
    backgroundColor: '#C67C4E',
    height: 32,
    width: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startext: {
    height: 36,
    width: 'auto',
    marginTop: 10,
    marginLeft: 8,
  },
  starImage: {
    height: 16,
    width: 16,
    marginTop: 10,
    marginLeft: 8,
  },
  coffeeListItem: {
    flex: 1,
    margin: 8,
    backgroundColor: '#C67C4E',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    height: 250,
  },
  item: {
    height: 38,
    width: 121,
    marginTop: 24,
    backgroundColor: '#C67C4E',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  flatListProductName: {
    color: 'black',
    borderRadius: 12,
  },
  promo: {
    height: 26,
    width: 60,
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 16,
  },
  title: {
    fontSize: 32,
  },
  rectangle: {
    width: 149,
    height: 43,
    marginHorizontal: 10,
    marginTop: 16,
  },

  rectangle2: {
    width: 149,
    height: 43,
    marginHorizontal: 10,
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
    height: 160,
  },
  searchCoffeeView: {
    color: '313131',
    height: 52,
    backgroundColor: '#313131',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 8,
    marginTop: 24,
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
    flex: 1,
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

export default Home;
