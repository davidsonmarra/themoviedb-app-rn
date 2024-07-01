import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {CardMovie, Header} from '../../../../../components';
import MovieDTO from '../../../../../@types/movies-dto';
import {colors} from '../../../../../configs/theme';
import styles from './styles';
import {SearchIcon} from '../../../../../assets/icons';

interface Props {
  moviesData: MovieDTO[];
  loadingFetchMovies: boolean;
  onEndReached: () => void;
  onPressMovie: (movie: MovieDTO) => void;
  onSearch: () => void;
}

const ListContainer = ({
  moviesData,
  loadingFetchMovies,
  onEndReached,
  onPressMovie,
  onSearch,
}: Props) => {
  const renderItem = ({item}: {item: MovieDTO}) => (
    <CardMovie movie={item} onPressCard={onPressMovie} />
  );

  const renderListFooterComponent = () =>
    loadingFetchMovies ? (
      <>
        <ActivityIndicator color={colors.primary} size="large" />
      </>
    ) : (
      <View style={{height: 100}} />
    );

  return (
    <View>
      <Header
        text="Listagem"
        rightIcon={() => <SearchIcon />}
        rightIconAction={onSearch}
      />
      <FlatList
        data={moviesData}
        keyExtractor={item => `${item.id}`}
        refreshing={loadingFetchMovies}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListFooterComponent={renderListFooterComponent}
        contentContainerStyle={styles.contentContainer}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        testID="movies-flatlist"
      />
    </View>
  );
};

export default ListContainer;
