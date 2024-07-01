import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesStack from '../movies/navigation';
import WelcomeStack from '../onboarding/navigation';

export type GlobalRootStackParamList = {
  Movies: undefined;
  Onboarding: undefined;
};

const {Navigator, Screen} =
  createNativeStackNavigator<GlobalRootStackParamList>();

const Navigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Onboarding" component={WelcomeStack} />
      <Screen name="Movies" component={MoviesStack} />
    </Navigator>
  );
};

export default Navigation;
