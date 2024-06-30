const formatMovieDate = (date: string) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString('pt-BR');
};

export default formatMovieDate;
