import { Game, Trailer } from "@/Interfaces/IGameHub";
import GameAPI from "@/pages/api/GeneralAPI";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (slug: string | number, endpoint: string) =>
  useQuery({
    queryKey: ["trailers", slug],
    queryFn: () => GameAPI.get(endpoint + "/" + slug + '/movies').then((res) => res.data),
  });
export default useTrailers;