import React from 'react';
import {Box, Typography} from '@mui/material';

export interface LifePathNumberProps {
  birthDate: Date;
}

export const LifePathNumber = ({birthDate}: LifePathNumberProps): React.ReactElement => {
  // const energies = getEnergyNumbers(birthDate);

  return (
    <Box>
      <Typography display="inline">Число жизненного пути (ЧЖП): </Typography>
      <Typography display="inline" color="primary">
        {/* {energies.join(', ')} */}
      </Typography>
    </Box>
  );
};
