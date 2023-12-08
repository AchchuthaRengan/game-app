import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data: genres } = useGenres();
  return genres?.pages.map((page, index) =>
    page.results.find((g) => g.id == genreId)
  );
};

export default useGenre;
