import React, {useEffect, useState} from 'react';
import ListContainer from './ui';
import {useDispatch, useSelector} from 'react-redux';
import {
  FETCH_MOVIES,
  FETCH_GENRE_LIST,
} from '../../../../store/slices/moviesSlice';
import {IRootState} from '../../../../store/store';
import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MovieDTO from '../../../../@types/movies-dto';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'ListScreen'>;

interface Props extends NavigationProps {}

const ListScreen = ({navigation}: Props) => {
  const [offset, setOffset] = useState(1);

  const dispatch = useDispatch();
  const {isEnd, moviesData, loadingFetchMovies} = useSelector(
    ({movies}: IRootState) => movies,
  );

  const onEndReached = () => {
    if (!isEnd) {
      dispatch(FETCH_MOVIES({offset: offset + 1, search: ''}));
      setOffset(offset + 1);
    }
  };

  const handlePressMovie = (movie: MovieDTO) => {
    navigation.navigate('DetailScreen', {movie});
  };

  const handleSearch = () => {
    navigation.navigate('SearchScreen');
  };

  useEffect(() => {
    dispatch(FETCH_MOVIES({offset, search: ''}));
    dispatch(FETCH_GENRE_LIST());
  }, []);

  return (
    <ListContainer
      moviesData={moviesData}
      loadingFetchMovies={loadingFetchMovies}
      onEndReached={onEndReached}
      onPressMovie={handlePressMovie}
      onSearch={handleSearch}
    />
  );
};

export default ListScreen;
