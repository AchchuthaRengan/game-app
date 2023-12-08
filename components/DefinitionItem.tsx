import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface Props{
    term:string;
    children:ReactNode | ReactNode[];
}

function DefinitionItem({term, children}:Props) {
  return (
    <Box marginY={5}>
        <Heading as='dt' fontSize={'medium'} color='grey.600'>{term}</Heading>
        <dd>
            {children}
        </dd>
    </Box>
  )
}

export default DefinitionItem