// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GenresResponse,Genres} from '@/Interfaces/IGameHub';
import GameAPI from './GeneralAPI';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Genres[]>
) {
  const response = await GameAPI.get<GenresResponse>('/genres');  
  const data = await response.data.results;  
  res.status(200).send(data);
}
