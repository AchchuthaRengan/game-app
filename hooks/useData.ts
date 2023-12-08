//import { useState, useEffect } from "react";
import GameAPI from "@/pages/api/GeneralAPI";
import { FetchResponse, Genres } from "@/Interfaces/IGameHub";
import ms from "ms";
//import { AxiosRequestConfig } from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const useData = <T>(key: Array<any>, endpoint: string, params?: Object) =>
  useInfiniteQuery<FetchResponse<T>>({
    queryKey: key,
    queryFn: ({ pageParam = 1 }) =>
      GameAPI.get(endpoint, {
        params: { ...params, page: pageParam },
      }).then((res) => res.data),
    staleTime: ms("24h"), //24hr
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

// When using Normal Axios API as a Generic Function
// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setIsLoading(true);
//     GameAPI.get<FetchResponse<T>>(endpoint, {
//       signal: controller.signal,
//       ...requestConfig
//     })
//       .then((res) => {
//         setData(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => setError(err.message));
//     // return () => controller.abort();
//   }, deps ? [...deps]: []);
//   return { data, error, isLoading };
// };

// For Normal Fetch API
//   useEffect(() => {
//     const controller = new AbortController();

//     const getGenres = async () => {
//       try {
//         setIsLoading(true);
//         //If SelectedGenre is Available
//         const URL = selectedGenre > 0 && selectedGenre != null ? `${BASE_FETCH_URL}/api/games/${selectedGenre}` : `${BASE_FETCH_URL}/api/fetchGames`;
//         const response = await fetch(URL,{
//           signal: controller.signal
//         });
//         const data = await response.json();
//         const fetchedGames = [];
//         for (var i in data) {
//           fetchedGames.push({
//             ...data[i],
//           });
//         }

//         const realGames = [];
//         for(let i in fetchedGames)
//         {
//           if(i=='3')
//           {
//             realGames.push({
//               ...games[i]
//             })
//           }
//         }
//         selectedGenre == 0 && selectedGenre != null ? setGames(fetchedGames) : setGames(realGames);

//         //If SelectedGenre is Not Available
//         const resp = await fetch(`${BASE_FETCH_URL}/api/fetchGenres`, {
//           signal: controller.signal
//         });

//         const dat = await resp.json();
//         const fetchedGenre = [];
//         for (var genre in dat) {
//           fetchedGenre.push({
//             ...dat[genre],
//           });
//         }
//         setGenre(fetchedGenre);

//         setIsLoading(false);
//       } catch (error: any) {
//         setIsLoading(true);
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };
//     getGenres();
//   }, [selectedGenre]);
//   return { games, genres ,error, isLoading };
// };

export default useData;
