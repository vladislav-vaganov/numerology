import React from 'react';
import {Box, Typography} from '@mui/material';
import {isValidBirthDate} from './utils';
import {NullableDate} from './types';

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

interface EnergieByYear {
  year: number;
  energie: number;
}

const groupEnergiesByYears = (birthDate: NullableDate, energyNumbers: number[], years: number): EnergieByYear[] => {
  if (!birthDate || !isValidBirthDate(birthDate)) {
    return [];
  }

  const birthYear = birthDate.getFullYear();
  return Array.from({length: years}, (_, i) => ({year: birthYear + i, energie: energyNumbers[i % 7]}));
};

export interface PersonalEnergyProps {
  birthDate: Date | null;
}

export const PersonalEnergy = ({birthDate}: PersonalEnergyProps): React.ReactElement => {
  const energies = getEnergyNumbers(birthDate);
  const energiesByYears = groupEnergiesByYears(birthDate, energies, 101);
  console.log(energiesByYears);

  return (
    <Box>
      <Typography display="inline">Личная энергия: </Typography>
      <Typography display="inline" color="primary">
        {energies.join(', ')}
      </Typography>
    </Box>
  );
};
