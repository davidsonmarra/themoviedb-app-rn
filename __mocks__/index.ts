import MovieDTO from '../src/@types/movies-dto';

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
    poster_path: 'path/to/image',
    release_date: '2021-01-01',
    backdrop_path: 'path/to/image',
    vote_average: 10,
    genre_ids: [1, 2],
  },
  {
    id: 2,
    title: 'Movie Title 2',
    overview: 'Movie Overview 2',
    poster_path: 'path/to/image',
    release_date: '2021-01-01',
    backdrop_path: 'path/to/image',
    vote_average: 9,
    genre_ids: [1, 2],
  },
];
