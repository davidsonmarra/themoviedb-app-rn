import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import styles from './styles';
import Text, {TextType} from '../../../../../components/text';
import Button from '../../../../../components/button';

interface Props {
  onPressContinue: () => void;
}

const WelcomeContainer = ({onPressContinue}: Props) => {
  return (
    <ImageBackground
      source={require('../../../../../assets/poster-avengers.jpg')}
      style={styles.container}>
      <View style={styles.overlay}>
        <Image
          source={require('../../../../../assets/logo-the-movie-db.png')}
          style={styles.logoImage}
          resizeMode="cover"
        />
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
