import React from 'react';
import {Box} from '@mui/material';
import {Area, AreaChart, Brush, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {COLORS, CURRENT_YEAR} from '../constants';

const YEARS_COUNT = 101;

interface EnergieByYear {
  year: number;
  energie: number;
}

const groupEnergiesByYears = (birthYear: number | null, energyNumbers: number[]): EnergieByYear[] => {
  if (!birthYear) {
    return [];
  }

  return Array.from({length: YEARS_COUNT}, (_, i) => ({year: birthYear + i, energie: energyNumbers[i % 7]}));
};

interface EnergyByYearsChartProps {
  birthYear: number | null;
  energieNumbers: number[];
}

export const EnergyByYearsChart = ({birthYear, energieNumbers}: EnergyByYearsChartProps): React.ReactElement | null => {
  const energiesByYears = groupEnergiesByYears(birthYear, energieNumbers);

  let startIndex, endIndex;
  if (birthYear){
    let startYear = CURRENT_YEAR - 3;
    if (startYear < birthYear){
      startYear = birthYear
    }
    if (startYear > birthYear + YEARS_COUNT - 7)
    {
      startYear = birthYear + YEARS_COUNT - 7
    }
    startIndex = startYear - birthYear;
    endIndex = startIndex + 6;
  }

  return !energiesByYears.length ? null : (
    <Box sx={{width:"100%", maxWidth: "1000px", height: "350px"}}>
      <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={energiesByYears} margin={{top: 10, right: 30, left: -40, bottom: 0}}>
        <defs>
          <linearGradient id="colorEnergie" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8} />
            <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
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
          stroke={COLORS.primary}
          fillOpacity={1}
          fill="url(#colorEnergie)"
          name="Энергия"
          isAnimationActive={false}
        />
        <ReferenceLine x={CURRENT_YEAR} stroke={COLORS.secondary} />
        <Brush dataKey="year" height={30} stroke={COLORS.primary} startIndex={startIndex} endIndex={endIndex}/>
      </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
