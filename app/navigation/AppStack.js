import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Payment from '../screens/Payment';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'modal'}}
      initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pay" component={Payment} />
    </Stack.Navigator>
  );
};

export default AppStack;
