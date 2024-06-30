import React from 'react';
import {TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {SearchIcon} from '../../assets/icons';
import {colors} from '../../configs/theme';

interface Props {
  value: string;
  setValue: (value: string) => void;
  onSearch: () => void;
}

const Input = ({value, setValue, onSearch}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        testID="input"
      />
      <TouchableOpacity onPress={onSearch} testID="search-button">
        <SearchIcon color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
