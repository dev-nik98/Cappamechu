import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../home';
import Orders from '../orders';
import StackNav from './stackNav';
import timer from '../router/timer'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../../../assets/home.png')
              : require('../../../assets/home_select.png');
          } else if (route.name === 'Orders') {
            iconName = focused
              ? require('../../../assets/shopping-bag.png')
              : require('../../../assets/select_bag.png');
          }

          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
      })}
     >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="StackNavi" options={{headerShown:false}} component={StackNav} />
        <Tab.Screen name="Timer" component={timer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;