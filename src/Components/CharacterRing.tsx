import React from 'react';
import {Box, Typography} from '@mui/material';
import {calcLifePathNumber, reduceNumberToDigit} from '../utils';

export interface CharacterRingProps {
  birthDate: Date;
}

export const CharacterRing = ({birthDate}: CharacterRingProps): React.ReactElement => {
  const characterRingNumbers = [
    reduceNumberToDigit(birthDate.getDate()),
    reduceNumberToDigit(birthDate.getMonth() + 1),
    reduceNumberToDigit(birthDate.getFullYear()),
    calcLifePathNumber(birthDate),
  ];

  return (
    <Box>
      <Typography display="inline">Кольцо характера: </Typography>
      <Typography display="inline" color="primary">
        {characterRingNumbers.join('. ')}
      </Typography>
    </Box>
  );
};
