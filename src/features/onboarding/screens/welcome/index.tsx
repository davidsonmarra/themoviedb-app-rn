import React from 'react';
import WelcomeContainer from './ui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GlobalRootStackParamList} from '../../../navigation';

type NavigationProps = NativeStackScreenProps<GlobalRootStackParamList>;

interface Props extends NavigationProps {}

const WelcomeScreen = ({navigation}: Props) => {
  const handlePressContinue = () => {
    navigation.navigate('Movies');
  };

  return <WelcomeContainer onPressContinue={handlePressContinue} />;
};

export default WelcomeScreen;
