import React from 'react';
import {Box, Typography} from '@mui/material';
import {sumDigitsInDate, sumDigitsInNumber} from '../utils';

const calcLifePathNumberWithSteps = (birthDate: Date): number[] => {
  const result = [];

  let step = sumDigitsInDate(birthDate);
  result.push(step);

  while (step > 9) {
    step = sumDigitsInNumber(step);
    result.push(step);
  }

  return result;
};

export interface LifePathNumberProps {
  birthDate: Date;
}

export const LifePathNumber = ({birthDate}: LifePathNumberProps): React.ReactElement => {
  const lifePathNumberWithSteps = calcLifePathNumberWithSteps(birthDate);

  return (
    <Box>
      <Typography display="inline">Число жизненного пути: </Typography>
      <Typography display="inline" color="primary">
        {lifePathNumberWithSteps.join(' ➞ ')}
      </Typography>
    </Box>
  );
};
