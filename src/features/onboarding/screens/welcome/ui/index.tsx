import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import Text, {TextType} from '../../../../../components/text';
import Button from '../../../../../components/button';

interface Props {
  onPressContinue: () => void;
}

const WelcomeContainer = ({onPressContinue}: Props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../../../assets/poster-avengers.jpg')}>
      <View style={styles.overlay}>
        <Text type={TextType.buttonPrimary}>IMDB</Text>
        <View>
          <Text type={TextType.buttonPrimary}>Seja bem vindo!</Text>
          <Text type={TextType.buttonPrimary}>
            Este é um aplicativo de filmes, utilizando a API pública do TMDB.
          </Text>
        </View>
        <Button
          testID="button-continue"
          text="Continuar"
          onPress={onPressContinue}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeContainer;
