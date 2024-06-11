import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Orders = () => {
  const [deliverIsSelected, setdeliverIsSelected] = useState(false);
  const [pickUpIsSelected, setPickUpIsSelected] = useState(false);
  const [cashIsSelected, setCashIsSelected] = useState(false);
  const [orderIsSelected, setOrderIsSelected] = useState(false);

  const selectBtn = (buttonType: string) => {
    if (buttonType == 'deliver') {
      setdeliverIsSelected(true);
      setPickUpIsSelected(false);
    } else {
      setdeliverIsSelected(false);
      setPickUpIsSelected(true);
    }
  };

  const selectCashBtn = (buttonType: string) => {
    if (buttonType == 'Cash') {
      setCashIsSelected(true);
    } else {
      setCashIsSelected(false);
    }
  };

  const selectOrderBtn = (buttonType: string) => {
    if (buttonType == 'Order') {
      setOrderIsSelected(true);
    } else {
      setOrderIsSelected(false);
    }
  };

  const selectOrderButton = () => {
    setOrderIsSelected(!orderIsSelected);
  };

  return (
    <View>
      <View style={{flexDirection: 'row', marginHorizontal: 25}}>
        <TouchableOpacity
          style={[
            styles.deliverBtn,
            {
              backgroundColor:
                deliverIsSelected === true ? '#C67C4E' : 'lightgrey',
            },
          ]}
          onPress={() => selectBtn('deliver')}>
          <Text
            style={[
              styles.deliverTextButton,
              {color: deliverIsSelected === true ? 'white' : 'black'},
            ]}>
            Deliver
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.pickUpBtn,
            {
              backgroundColor:
                pickUpIsSelected === true ? '#C67C4E' : 'lightgrey',
            },
          ]}
          onPress={() => selectBtn('pickup')}>
          <Text
            style={[
              styles.pickUpTextButton,
              {color: pickUpIsSelected === true ? 'white' : 'black'},
            ]}>
            Pick Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.deliverAddressText}>Delivery Address</Text>
        <Text style={styles.nameText}>JL. Kpg. Sutoyo</Text>
        <Text style={{color: 'grey', marginHorizontal: 25}}>
          Kpg. Sutoyo No. 620, Bilzen,Tanjungbalal.
        </Text>
        <View style={{flexDirection: 'row', marginHorizontal: 25}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 5,
              borderRadius: 12,
              backgroundColor: 'white',
              borderColor: '#303336',
              borderWidth: 1,
            }}>
            <Image
              source={require('../../assets/edit.png')}
              style={styles.editImage}
            />
            <Text style={styles.editAddressText}>Edit Address</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 5,
              marginHorizontal: 10,
              borderRadius: 12,
              backgroundColor: 'white',
              borderColor: '#303336',
              borderWidth: 1,
            }}>
            <Image
              source={require('../../assets/lists.png')}
              style={styles.addNotesImage}
            />
            <Text style={styles.addNotesText}>Add Notes</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.horizontalLine} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/capp.png')}
              style={styles.orderImage}></Image>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={styles.orderText}>Cappaccino</Text>
              <Text style={{color: '#9B9B9B', height: 15}}>with Chocolate</Text>
            </View>

            <TouchableOpacity style={styles.minusButton}>
              <Text style={styles.minuButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={{color: '#2F2D2C', fontSize: 20, marginHorizontal: 2}}>
              1
            </Text>
            <TouchableOpacity style={styles.plusButton}>
              <Text style={styles.plusButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.horizontalLine} />

          <View style={styles.rectangle}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Image
                  source={require('../../assets/Discount.png')}
                  style={styles.discountImage}
                />
              </View>
              <Text style={styles.discountText}> 1 Discount is applied </Text>
              <View style={{flex: 1.2}}>
                <Image
                  source={require('../../assets/right-arrow.png')}
                  style={styles.rightArrowImage}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.paymentSummary}>Payment Summary</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
                marginHorizontal: 25,
              }}>
              <Text style={{color: 'black'}}>Price</Text>
              <Text
                style={{
                  color: 'black',
                  flexDirection: 'row',
                  marginLeft: 230,
                  fontWeight: 'bold',
                }}>
                $4.53
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
                marginHorizontal: 25,
              }}>
              <Text style={{color: 'black'}}>Delivery Fee</Text>
              <Text
                style={{
                  color: 'black',
                  flexDirection: 'row',
                  marginLeft: 180,
                  fontWeight: 'bold',
                }}>
                $1.53
              </Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 25,
            }}>
            <Text style={{color: 'black'}}>Total Payment</Text>
            <Text
              style={{
                color: 'black',
                flexDirection: 'row',
                marginLeft: 170,
                fontWeight: 'bold',
              }}>
              $6.06
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />

        <View style={{flexDirection: 'row',marginHorizontal:25}}>
          <View style={{flex: 2}}>
            <Image
              source={require('../../assets/cash.png')}
              style={styles.cashIconImage}
            />
          </View>
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={[
                styles.cashButton,
                {
                  backgroundColor:
                    cashIsSelected === true ? '#C67C4E' : 'white',
                },
              ]}
              onPress={() => selectCashBtn('Cash')}>
              <Text
                style={[
                  styles.cashTextbutton,
                  {color: cashIsSelected === true ? 'white' : 'black'},
                ]}>
                Cash
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 8}}>
            <Text
              style={{
                color: 'black',
                flexDirection: 'row',
                marginLeft: 4,
                fontWeight: 'bold',
              }}>
              {' '}
              $6.06
            </Text>
            </View>

            <View style={{flex:1}}>
            <Image
              source={require('../../assets/more.png')}
              style={styles.moreImage}
            />
            </View>
          
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.orderButton,
            {
              backgroundColor: orderIsSelected ? '#C67C4E' : 'white',
            },
          ]}
          onPress={selectOrderButton}>
          <Text
            style={[
              styles.orderTextButon,
              {color: orderIsSelected === true ? 'white' : 'black'},
            ]}>
            {' '}
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  orderTextButon: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  orderButton: {
    height: 55,
    
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 20,
  },
  moreImage: {
    backgroundColor: '#808080',
    height: 19,
    width: 19,

    borderRadius: 8,
  },
  cashButton: {
    flex: 2,
    height: 24,
    width: 51,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cashTextbutton: {
    color: 'black',

    fontSize: 12,
    fontWeight: 'bold',
  },
  cashIconImage: {
    height: 24,
    width: 24,
  },
  paymentSummary: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 25,
    marginTop: 5,
  },
  rightArrowImage: {
    height: 8,
    width: 11,
    marginHorizontal: 10,
  },
  discountImage: {
    height: 20,
    width: 20,
    marginLeft: 8,
  },
  discountText: {
    flex: 10,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  rectangle: {
   
    height: 45,
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  minusButton: {
    borderRadius: 10,
    height: 20,
    width: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginLeft: 15,
    marginRight: 10,
  },
  minuButtonText: {
    color: 'black',
    fontSize: 20,
    lineHeight: 21,
  },
  plusButton: {
    borderRadius: 10,
    height: 20,
    width: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 10,
  },
  plusButtonText: {
    color: 'black',
    fontSize: 20,
    lineHeight: 21,
  },
  orderImage: {
    height: 54,
    width: 54,
    borderRadius: 12,
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  orderText: {
    flexDirection: 'row',
    color: '#2F2D2C',
    fontWeight: 'bold',
    fontSize: 16,
    height: 20,
    width: 91,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#EAEAEA',
    marginVertical: 20,
  },
  deliverAddressText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  nameText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  editImage: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 5,
  },
  addNotesImage: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 4,
  },
  editAddressText: {
    color: 'black',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNotesText: {
    color: 'black',
    marginHorizontal: 5,
  },
  deliverTextButton: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickUpTextButton: {
    color: 'black',

    fontSize: 18,
    fontWeight: 'bold',
  },
  deliverBtn: {
    height: 40,
    width: 154,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickUpBtn: {
    height: 40,
    width: 154,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Orders;
