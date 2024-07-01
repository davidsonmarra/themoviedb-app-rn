import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {
  CardMovie,
  Header,
  Input,
  Text,
  TextType,
} from '../../../../../components';
import styles from './styles';
import MovieDTO from '../../../../../@types/movies-dto';
import {colors} from '../../../../../configs/theme';

interface Props {
  search: string;
  searchedMoviesData: MovieDTO[];
  loadingFetchSearchMovies: boolean;
  onEndReached: () => void;
  setSearch: (value: string) => void;
  onSearchMovies: () => void;
  onPressMovie: (movie: MovieDTO) => void;
}

const SearchContainer = ({
  search,
  searchedMoviesData,
  loadingFetchSearchMovies,
  onEndReached,
  setSearch,
  onSearchMovies,
  onPressMovie,
}: Props) => {
  const renderItem = ({item}: {item: MovieDTO}) => (
    <CardMovie movie={item} onPressCard={onPressMovie} />
  );

  return (
    <View>
      <Header text="Procurar Filme" />
      <View style={styles.container}>
        <Input value={search} setValue={setSearch} onSearch={onSearchMovies} />
        <FlatList
          data={searchedMoviesData}
          keyExtractor={item => `${item.id}`}
          refreshing={loadingFetchSearchMovies}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListFooterComponent={() =>
            renderListFooterComponent(loadingFetchSearchMovies)
          }
          ListEmptyComponent={emptyListComponent}
          contentContainerStyle={styles.contentContainer}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={16}
          keyboardDismissMode="on-drag"
          testID="movies-flatlist"
        />
      </View>
    </View>
  );
};

const renderListFooterComponent = (loadingFetchSearchMovies: boolean) =>
  loadingFetchSearchMovies ? (
    <>
      <ActivityIndicator color={colors.primary} size="large" />
    </>
  ) : (
    <View style={{height: 100}} />
  );

const emptyListComponent = () => (
  <View style={styles.emptyContainer}>
    <Text type={TextType.textBold}>Sem resultados.</Text>
  </View>
);

export default SearchContainer;
