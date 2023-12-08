import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Game, GameResponse } from "@/Interfaces/IGameHub";

const GameAPI = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d43ba3e1cfd463096b644b89f81b0c8",
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const genreId = req.query.genreId;
  const response = await GameAPI.get<GameResponse>("/games", {
    params: {genres: genreId},
  });
  const data = await response.data;
  res.status(200).send(data);
}
