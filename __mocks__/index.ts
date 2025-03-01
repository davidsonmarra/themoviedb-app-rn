import MovieDTO from '../src/@types/movies-dto';
import {IRootState} from '../src/store/store';

export const mockCardMovie: MovieDTO = {
  id: 1,
  title: 'Movie Title',
  overview: 'Movie Overview',
  poster_path:
    'https://image.tmdb.org/t/p/w188_and_h282_bestv2/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
  release_date: '2021-01-01',
  backdrop_path:
    'https://image.tmdb.org/t/p/w188_and_h282_bestv2/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
  vote_average: 10,
  genre_ids: [1, 2],
};

export const mockListMovie: MovieDTO[] = [
  {
    id: 1,
    title: 'Movie Title',
    overview: 'Movie Overview',
    poster_path:
      'https://image.tmdb.org/t/p/w188_and_h282_bestv2/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
    release_date: '2021-01-01',
    backdrop_path:
      'https://image.tmdb.org/t/p/w188_and_h282_bestv2/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
    vote_average: 10,
    genre_ids: [1, 2],
  },
  {
    id: 2,
    title: 'Movie Title 2',
    overview: 'Movie Overview 2',
    poster_path:
      'https://image.tmdb.org/t/p/w188_and_h282_bestv2/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
    release_date: '2021-01-01',
    backdrop_path:
      'https://image.tmdb.org/t/p/w188_and_h282_bestv2/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
    vote_average: 9,
    genre_ids: [1, 2],
  },
];

export const mockPreloadedStateFilled: IRootState = {
  movies: {
    moviesData: mockListMovie,
    searchedMoviesData: mockListMovie,
    loadingFetchGenres: false,
    loadingFetchMovies: false,
    loadingFetchSearchMovies: false,
    error: {} as Error,
    genreList: [
      {id: 1, name: 'Action'},
      {id: 2, name: 'Adventure'},
    ],
    isEnd: false,
    isEndSearch: false,
  },
};

export const mockPreloadedStateEmpty: IRootState = {
  movies: {
    moviesData: [],
    searchedMoviesData: [],
    loadingFetchGenres: false,
    loadingFetchMovies: false,
    loadingFetchSearchMovies: false,
    error: {} as Error,
    genreList: [],
    isEnd: false,
    isEndSearch: false,
  },
};
