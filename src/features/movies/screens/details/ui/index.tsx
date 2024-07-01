import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import MovieDTO from '../../../../../@types/movies-dto';
import {Header, Text, TextType, VoteAverage} from '../../../../../components';
import styles from './styles';
import formatMovieDate from '../../../../../utils/format-movie-date';
import GenreDTO from '../../../../../@types/genre-dto';

interface Props {
  movie: MovieDTO;
  genresMovie: GenreDTO[];
}

const DetailsContainer = ({movie, genresMovie}: Props) => {
  return (
    <View style={styles.container}>
      <Header text="Detalhes" />
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w188_and_h282_bestv2/${movie.backdrop_path}`,
        }}
        style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text type={TextType.title} style={styles.title}>
            {movie.title}
          </Text>
          <View style={styles.containerInfo}>
            <Text type={TextType.overlayText}>
              {formatMovieDate(movie.release_date)} •
            </Text>
            <View style={styles.containerGenres}>
              {genresMovie.map((genre, index) => (
                <React.Fragment key={genre.id}>
                  <Text type={TextType.overlayText}> {genre.name}</Text>
                  {index < genresMovie.length - 1 && (
                    <Text type={TextType.overlayText}>, </Text>
                  )}
                </React.Fragment>
              ))}
            </View>
          </View>
          <Text type={TextType.overlayTitle} style={styles.subtitle}>
            Sinopse
          </Text>
          <Text type={TextType.overlayText}>{movie.overview}</Text>
          <View style={styles.average}>
            <VoteAverage voteAverage={movie.vote_average} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailsContainer;
