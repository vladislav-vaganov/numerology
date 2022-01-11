import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {EnergyByYearsChart} from './EnergyByYearsChart';
import {isValidBirthDate} from '../utils';
import {NullableDate} from '../types';

const getEnergyNumbers = (birthDate: NullableDate): number[] => {
  if (!birthDate || !isValidBirthDate(birthDate)) {
    return [];
  }

  const year = birthDate.getFullYear();
  const product = (birthDate.getDate() * 100 + birthDate.getMonth() + 1) * year;
  const energyNumbers = [...product.toString()].map((n) => +n);

  while (energyNumbers.length < 7) {
    energyNumbers.push(0);
  }

  if (year > 1999) {
    if (!energyNumbers[2]) {
      energyNumbers[2] = 7;
    }
    if (!energyNumbers[3]) {
      energyNumbers[3] = 8;
    }
    if (!energyNumbers[4]) {
      energyNumbers[4] = 9;
    }
  }

  return energyNumbers;
};

export interface PersonalEnergyProps {
  birthDate: NullableDate;
}

export const PersonalEnergy = ({birthDate}: PersonalEnergyProps): React.ReactElement => {
  const energies = getEnergyNumbers(birthDate);

  return (
    <Stack spacing={2}>
      <Box>
        <Typography display="inline">Личная энергия: </Typography>
        <Typography display="inline" color="primary">
          {energies.join(', ')}
        </Typography>
      </Box>

      <EnergyByYearsChart birthYear={birthDate && birthDate.getFullYear()} energieNumbers={energies} />
    </Stack>
  );
};
