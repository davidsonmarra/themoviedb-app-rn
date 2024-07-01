import React, {useState} from 'react';
import SearchContainer from './ui';
import {IRootState} from '../../../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  FETCH_SEARCH_MOVIES,
  RESET_SEARCH_MOVIES,
} from '../../../../store/slices/moviesSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import MovieDTO from '../../../../@types/movies-dto';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchScreen'
>;

interface Props extends NavigationProps {}

const SearchScreen = ({navigation}: Props) => {
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(1);

  const dispatch = useDispatch();
  const {searchedMoviesData, isEndSearch, loadingFetchSearchMovies} =
    useSelector(({movies}: IRootState) => movies);

  const onEndReached = () => {
    if (!isEndSearch) {
      dispatch(FETCH_SEARCH_MOVIES({offset: offset + 1, search}));
      setOffset(offset + 1);
    }
  };

  const handleSearchMovies = () => {
    dispatch(RESET_SEARCH_MOVIES());
    dispatch(FETCH_SEARCH_MOVIES({offset: 0, search}));
    setOffset(0);
  };

  const handlePressMovie = (movie: MovieDTO) => {
    navigation.navigate('DetailScreen', {movie});
  };

  return (
    <SearchContainer
      search={search}
      searchedMoviesData={searchedMoviesData}
      loadingFetchSearchMovies={loadingFetchSearchMovies}
      onEndReached={onEndReached}
      setSearch={setSearch}
      onSearchMovies={handleSearchMovies}
      onPressMovie={handlePressMovie}
    />
  );
};

export default SearchScreen;
