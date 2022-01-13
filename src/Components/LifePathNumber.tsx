import React from 'react';
import {Box, Typography} from '@mui/material';
import {calcLifePathNumberWithSteps} from '../utils';

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
