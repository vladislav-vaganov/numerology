import React from 'react';
import {Box, Typography} from '@mui/material';
import {isValidBirthDate} from './utils';

export interface PersonalEnergyProps {
  birthDate: Date | null;
}

export const PersonalEnergy = ({birthDate}: PersonalEnergyProps): React.ReactElement => (
  <Box>{isValidBirthDate(birthDate) && <Typography>{birthDate?.toString()}</Typography>}</Box>
);
