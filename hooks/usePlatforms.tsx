import { FetchResponse, Platform } from "@/Interfaces/IGameHub";
import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import GameAPI from "@/pages/api/GeneralAPI";

const usePlatforms = () => useData<Platform>(['platforms'],'/platforms/lists/parents');

//Explanation on useGenres ---> Please Check out
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatforms = () =>  useQuery({
//     queryKey: ["platforms"],
//     //queryFn: () => useData<Genres>("/genres"),
//     queryFn: () =>
//       GameAPI.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
//     staleTime: 24 * 60 * 60 * 1000, //24 Hrs 60Mins 60Sec 1000 Millisecs    
//   });

export default usePlatforms;