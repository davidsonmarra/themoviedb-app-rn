import {AxiosError} from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../services/api';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_GENRE_LIST,
  FETCH_GENRE_LIST_SUCCESS,
  FETCH_GENRE_LIST_ERROR,
} from '../slices/moviesSlice';
import constants from '../../constants';

export function* fetchBooks({
  payload: {offset, search},
}: ReturnType<typeof FETCH_MOVIES>) {
  const searchQuery = `movie/popular?api_key=${constants.API_KEY}&language=pt-BR&page=${offset}`;

  try {
    const {data} = yield call(api.get, searchQuery);
    yield put(FETCH_MOVIES_SUCCESS(data?.results));
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      yield put(FETCH_MOVIES_ERROR(error));
  }
}

export function* fetchGenres() {
  const searchQuery = `genre/movie/list?api_key=${constants.API_KEY}&language=pt-BR`;

  try {
    const {data} = yield call(api.get, searchQuery);
    yield put(FETCH_GENRE_LIST_SUCCESS(data?.genres));
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      yield put(FETCH_GENRE_LIST_ERROR(error));
  }
}

export default function* watcher() {
  yield all([
    takeLatest(FETCH_MOVIES, fetchBooks),
    takeLatest(FETCH_GENRE_LIST, fetchGenres),
  ]);
}
