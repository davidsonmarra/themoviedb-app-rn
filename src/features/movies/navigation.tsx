import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListScreen} from './screens';
import DetailsScreen from './screens/details';
import MovieDTO from '../../@types/movies-dto';
import SearchScreen from './screens/search';

export type RootStackParamList = {
  ListScreen: undefined;
  DetailScreen: {movie: MovieDTO};
  SearchScreen: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="ListScreen" component={ListScreen} />
      <Screen name="DetailScreen" component={DetailsScreen} />
      <Screen name="SearchScreen" component={SearchScreen} />
    </Navigator>
  );
};

export default Navigation;
