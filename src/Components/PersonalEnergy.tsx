import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {EnergyByYearsChart} from './EnergyByYearsChart';

const getEnergyNumbers = (birthDate: Date): number[] => {
  const year = birthDate.getFullYear();
  const product = (birthDate.getDate() * 100 + birthDate.getMonth() + 1) * year;
  const energyNumbers = [...product.toString()].map((n) => +n);

  while (energyNumbers.length < 7) {
    energyNumbers.push(0);
  }

  // special cases:
  // people whose birth year starts from 2000 and energy numbers contains 3 and more continuous zeros
  if (year > 1999 && product.toString().includes('000')) {
    // skip last 2 digits and find start index of zero for replace
    let index = energyNumbers.length - 3;
    while(index > 0 && energyNumbers[index] !== 0){
      index--;
    }

    // change zeros with digits from 9 and less
    let digitForReplace = 9;
    while(index > 0 && energyNumbers[index] === 0){
      energyNumbers[index] = digitForReplace;
      digitForReplace--;
      index--;
    }
  }

  return energyNumbers;
};

export interface PersonalEnergyProps {
  birthDate: Date;
}

export const PersonalEnergy = ({birthDate}: PersonalEnergyProps): React.ReactElement | null => {
  const energies = getEnergyNumbers(birthDate);

  return (
    <Stack spacing={2}>
      <Box>
        <Typography display="inline">Личная энергия: </Typography>
        <Typography display="inline" color="primary">
          {energies.join(', ')}
        </Typography>
      </Box>

      <EnergyByYearsChart birthYear={birthDate.getFullYear()} energieNumbers={energies} />
    </Stack>
  );
};
