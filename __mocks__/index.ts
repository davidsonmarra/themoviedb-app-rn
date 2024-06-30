import MovieDTO from '../src/@types/movies-dto';

export const mockCardMovie: MovieDTO = {
  id: 1,
  title: 'Movie Title',
  overview: 'Movie Overview',
  poster_path: '7qOSKoOAPgemYhBwbJgBWcCxPWZ.jpg',
  release_date: '2021-01-01',
  backdrop_path: 'path/to/image',
};

export const mockListMovie: MovieDTO[] = [
  {
    id: 1,
    title: 'Movie Title',
    overview: 'Movie Overview',
    poster_path: 'path/to/image',
    release_date: '2021-01-01',
    backdrop_path: 'path/to/image',
  },
  {
    id: 2,
    title: 'Movie Title 2',
    overview: 'Movie Overview 2',
    poster_path: 'path/to/image',
    release_date: '2021-01-01',
    backdrop_path: 'path/to/image',
  },
];
