import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {Area, AreaChart, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis} from 'recharts';
import {isValidBirthDate} from './utils';
import {NullableDate} from './types';
import {CURRENT_YEAR} from './constants';

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

const scrollChartToCurrentYear = (): void => {
  document.getElementById('currentYearReferenceLine')?.scrollIntoView({inline: 'center'});
};

export interface PersonalEnergyProps {
  birthDate: Date | null;
}

export const PersonalEnergy = ({birthDate}: PersonalEnergyProps): React.ReactElement => {
  const energies = getEnergyNumbers(birthDate);
  const energiesByYears = groupEnergiesByYears(birthDate, energies, 101);

  React.useEffect(() => {
    if (!energiesByYears.length) {
      return;
    }
    scrollChartToCurrentYear();
  }, [energiesByYears]);

  return (
    <Stack spacing={2}>
      <Box>
        <Typography display="inline">Личная энергия: </Typography>
        <Typography display="inline" color="primary">
          {energies.join(', ')}
        </Typography>
      </Box>

      {!!energiesByYears.length && (
        <Box sx={{overflowX: 'auto', width: '100%'}}>
          <AreaChart width={4600} height={300} data={energiesByYears} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
              <linearGradient id="colorEnergie" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00838f" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#00838f" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" interval={0} />
            <YAxis scale="linear" domain={[0, 9]} interval={0} tickCount={9} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              dot
              type="monotone"
              dataKey="energie"
              stroke="#00838f"
              fillOpacity={1}
              fill="url(#colorEnergie)"
              name="Энергия"
              isAnimationActive={false}
            />
            <ReferenceLine x={CURRENT_YEAR} stroke="#f50057" id="currentYearReferenceLine" />
          </AreaChart>
        </Box>
      )}
    </Stack>
  );
};
