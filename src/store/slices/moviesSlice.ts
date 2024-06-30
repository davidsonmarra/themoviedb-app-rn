import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import MovieDTO from '../../@types/movies-dto';
import GenreDTO from '../../@types/genre-dto';

interface Props {
  isEnd: boolean;
  loadingFetchMovies: boolean;
  loadingFetchGenres: boolean;
  error: Error | AxiosError;
  moviesData: MovieDTO[];
  genreList: GenreDTO[];
}

const initialState: Props = {
  isEnd: true,
  loadingFetchMovies: false,
  loadingFetchGenres: false,
  error: {} as Error | AxiosError,
  moviesData: [],
  genreList: [],
};

export interface IFetchMovies {
  offset: number;
  search: string;
}

const counterSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    FETCH_MOVIES: (state: Props, {payload}: PayloadAction<IFetchMovies>) => ({
      ...state,
      loadingFetchMovies: true,
      isEnd: false,
      error: {} as Error | AxiosError,
    }),
    FETCH_MOVIES_SUCCESS: (
      state: Props,
      {payload}: PayloadAction<MovieDTO[]>,
    ) => {
      const uniqueMovies = payload.filter(
        newMovie =>
          !state.moviesData.some(
            existingMovie => existingMovie.id === newMovie.id,
          ),
      );

      return {
        ...state,
        isEnd: payload?.length < 20,
        loadingFetchMovies: false,
        error: {} as Error | AxiosError,
        moviesData: state.moviesData.concat(uniqueMovies),
      };
    },
    FETCH_MOVIES_ERROR: (
      state: Props,
      {payload}: PayloadAction<Error | AxiosError>,
    ) => ({
      ...state,
      loadingFetchMovies: false,
      error: payload,
    }),
    FETCH_GENRE_LIST: (state: Props) => ({
      ...state,
      loadingFetchGenres: true,
      error: {} as Error | AxiosError,
    }),
    FETCH_GENRE_LIST_SUCCESS: (
      state: Props,
      {payload}: PayloadAction<GenreDTO[]>,
    ) => ({
      ...state,
      loadingFetchGenres: false,
      error: {} as Error | AxiosError,
      genreList: payload,
    }),
    FETCH_GENRE_LIST_ERROR: (
      state: Props,
      {payload}: PayloadAction<Error | AxiosError>,
    ) => ({
      ...state,
      loadingFetchGenres: false,
      error: payload,
    }),
    RESET_MOVIES: (state: Props) => ({
      ...state,
      isEnd: false,
      loadingFetchMovies: false,
      error: {} as Error | AxiosError,
      booksData: [],
      category: {key: '', title: ''},
      search: '',
    }),
  },
});

const {actions, reducer} = counterSlice;

export const {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_GENRE_LIST,
  FETCH_GENRE_LIST_SUCCESS,
  FETCH_GENRE_LIST_ERROR,
  RESET_MOVIES,
} = actions;
export default reducer;
