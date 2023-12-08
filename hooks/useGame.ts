import { Game } from "@/Interfaces/IGameHub";
import GameAPI from "@/pages/api/GeneralAPI";
import { useQuery } from "@tanstack/react-query";

const useGame = (slug: string | number, endpoint: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => GameAPI.get<Game>(endpoint + "/" + slug).then((res) => res.data),
  });
export default useGame;