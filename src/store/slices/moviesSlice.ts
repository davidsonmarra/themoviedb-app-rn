import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import MoviesDTO from '../../@types/movies-dto';

interface Props {
  isEnd: boolean;
  loadingFetchMovies: boolean;
  error: Error | AxiosError;
  moviesData: MoviesDTO[];
}

const initialState: Props = {
  isEnd: true,
  loadingFetchMovies: false,
  error: {} as Error | AxiosError,
  moviesData: [],
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
      {payload}: PayloadAction<MoviesDTO[]>,
    ) => ({
      ...state,
      isEnd: payload?.length < 15,
      loadingFetchMovies: false,
      error: {} as Error | AxiosError,
      moviesData: state.moviesData.concat(payload),
    }),
    FETCH_MOVIES_ERROR: (
      state: Props,
      {payload}: PayloadAction<Error | AxiosError>,
    ) => ({
      ...state,
      loadingFetchMovies: false,
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
  RESET_MOVIES,
} = actions;
export default reducer;
