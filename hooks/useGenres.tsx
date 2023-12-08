import { FetchResponse, Genres } from "@/Interfaces/IGameHub";
import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import GameAPI from "@/pages/api/GeneralAPI";

const useGenres = () => useData<Genres>(['genres'],'/genres');


//Used When using useQuery For Seperate Purposes
// const useGenres = () =>
//   useQuery({
//     queryKey: ["genres"],
//     //queryFn: () => useData<Genres>("/genres"),
//     queryFn: () =>
//       GameAPI.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
//     staleTime: 24 * 60 * 60 * 1000, //24 Hrs 60Mins 60Sec 1000 Millisecs    
//   });

//Used When using AXIOS Generic Function
//const useGenres = () => useData<Genres>('/genres');

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genres[]>([]);
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     const getGenres = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(`${BASE_FETCH_URL}/api/fetchGenres`, {
//           signal: controller.signal,
//         });
//         const data = await response.json();
//         const fetchedGenres = [];
//         for (var genre in data) {
//           fetchedGenres.push({
//             ...data[genre],
//           });
//         }
//         setGenres(fetchedGenres);

//         setIsLoading(false);
//       } catch (error: any) {
//         setIsLoading(true);
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };
//     getGenres();
//   }, []);
//   return { genres, error, isLoading };
// };

export default useGenres;
