import React from 'react';
import {useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DetailsContainer from './ui';
import {RootStackParamList} from '../../navigation';
import {IRootState} from '../../../../store/store';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailScreen'
>;

interface Props extends NavigationProps {}

const DetailsScreen = ({route}: Props) => {
  const {movie} = route.params;
  const {genreList} = useSelector(({movies}: IRootState) => movies);
  const genresMovie = genreList.filter(genre =>
    movie.genre_ids.includes(genre.id),
  );

  return <DetailsContainer movie={movie} genresMovie={genresMovie} />;
};

export default DetailsScreen;
