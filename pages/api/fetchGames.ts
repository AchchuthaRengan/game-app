// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Game, GameResponse } from '@/Interfaces/IGameHub';
import GameAPI from './GeneralAPI';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game[]>
) {
  const response = await GameAPI.get<GameResponse>('/games');  
  const data = await response.data.results;  
  res.status(200).send(data);
}
