import { Game } from '@/Interfaces/IGameHub'
import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './CriticScore';

interface Props{
    game:Game
}

function GameAttribs({game}:Props) {
  return (
    <SimpleGrid columns={2} as='dl'>
        <DefinitionItem term='Platforms'>
          {game?.parent_platforms.map(plat=>{
            return <Text key={plat.platform.id}>{plat.platform.name}</Text>
          })}
        </DefinitionItem>
        <DefinitionItem term='CriticScore'>
          <CriticScore criticscore={game?.metacritic!}/>
        </DefinitionItem>
        <DefinitionItem term='Genres'>
          {game?.genres.map((g)=>{
            return <Text key={g.id}>{g.name}</Text>
          })}
        </DefinitionItem>
        <DefinitionItem term='Publishers'>
          {game?.publishers.map((p) => {
            return <Text key={p.id}>{p.name}</Text>
          })}
        </DefinitionItem>
        </SimpleGrid>
  )
}

export default GameAttribs