import React, {memo} from 'react';
import MovieDTO from '../../@types/movies-dto';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import formatMovieDate from '../../utils/format-movie-date';

interface Props {
  movie: MovieDTO;
  onPressCard: (movie: MovieDTO) => void;
}

const CardMovieComponent = ({movie, onPressCard}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPressCard(movie)}
      style={styles.container}
      testID="movie-card">
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w188_and_h282_bestv2/${movie.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.contentDescription}>
        <Text style={styles.cardTitle}>{movie.title}</Text>
        <Text style={styles.cardDate}>
          {formatMovieDate(movie.release_date)}
        </Text>
        <Text style={styles.cardOverview} numberOfLines={3}>
          {movie.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CardMovie = memo(CardMovieComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movie, nextProps.movie);
});

export default CardMovie;
