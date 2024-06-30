import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListScreen} from './screens';

export type RootStackParamList = {
  ListScreen: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="ListScreen" component={ListScreen} />
    </Navigator>
  );
};

export default Navigation;
