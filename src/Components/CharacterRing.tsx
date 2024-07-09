import React from 'react';
import {Box, Typography} from '@mui/material';
import {calcCharacterRingNumbers} from '../utils';

export interface CharacterRingProps {
  birthDate: Date;
}

export const CharacterRing = ({birthDate}: CharacterRingProps): React.ReactElement => {
  const characterRingNumbers = calcCharacterRingNumbers(birthDate);

  return (
    <Box>
      <Typography display="inline">Кольцо характера: </Typography>
      <Typography display="inline" color="primary">
        {characterRingNumbers.join('. ')}
      </Typography>
    </Box>
  );
};
