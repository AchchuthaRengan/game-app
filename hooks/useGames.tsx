import { FetchResponse, Game, Genres, Platform } from "@/Interfaces/IGameHub";
import useData from "./useData";
import { GameQuery } from "@/Store/GameQueryStore";
import { useQuery } from "@tanstack/react-query";
import GameAPI from "@/pages/api/GeneralAPI";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(["games",gameQuery], "/games", {
    genres: gameQuery.genreId,
    parent_platforms: gameQuery.platformId,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  });

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

// const useGames = (gameQuery: GameQuery) =>
//   useQuery({
//     queryKey: ["games",gameQuery],
//     queryFn: () =>
//       GameAPI.get<FetchResponse<Game>>("/games", {
//         params: {
//           genres: gameQuery.genre?.id,
//           parent_platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//         },
//       }).then((res) => res.data),
//   });

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     const getGames = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(`${BASE_FETCH_URL}/api/fetchGames`, {
//           signal: controller.signal,
//         });
//         const data = await response.json();
//         const fetchedGames = [];
//         for (var game in data) {
//           fetchedGames.push({
//             ...data[game],
//           });
//         }
//         setGames(fetchedGames);

//         setIsLoading(false);
//       } catch (error: any) {
//         setIsLoading(true);
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };
//     getGames();
//   }, []);

//   return { games, error, isLoading };
// };

export default useGames;
