export default interface MovieDTO {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
}
