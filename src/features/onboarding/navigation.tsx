import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from './screens';

export type RootStackParamList = {
  Welcome: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={WelcomeScreen} />
    </Navigator>
  );
};

export default Navigation;
