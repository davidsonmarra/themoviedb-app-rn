import React from 'react';
import WelcomeContainer from './ui';

const WelcomeScreen = () => {
  const handlePressContinue = () => {
    console.log('Continue button pressed');
  };

  return <WelcomeContainer onPressContinue={handlePressContinue} />;
};

export default WelcomeScreen;
