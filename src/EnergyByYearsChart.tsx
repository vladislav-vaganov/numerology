import React from 'react';
import {Box} from '@mui/material';
import {Area, AreaChart, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis} from 'recharts';
import {CURRENT_YEAR} from './constants';

const CURRENT_YEAR_LINE_ID = 'currentYearReferenceLine';
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

const scrollChartToCurrentYear = (): void => {
  document.getElementById(CURRENT_YEAR_LINE_ID)?.scrollIntoView({inline: 'center'});
};

interface EnergyByYearsChartProps {
  birthYear: number | null;
  energieNumbers: number[];
}

export const EnergyByYearsChart = ({birthYear, energieNumbers}: EnergyByYearsChartProps): React.ReactElement | null => {
  const energiesByYears = groupEnergiesByYears(birthYear, energieNumbers);

  React.useEffect(() => {
    if (!energiesByYears.length) {
      return;
    }
    scrollChartToCurrentYear();
  }, [energiesByYears]);

  return !energiesByYears.length ? null : (
    <Box sx={{overflowX: 'auto', width: '100%'}}>
      {/* hack: sticky y-axis emulation */}
      <AreaChart
        width={25}
        height={277}
        margin={{top: 10, right: 0, left: -35, bottom: 7}}
        style={{position: 'absolute', marginLeft: -5, marginBottom: 23, backgroundColor: '#ffffff', zIndex: 1}}
      >
        <YAxis scale="linear" domain={[0, 9]} interval={0} tickCount={9} />
      </AreaChart>

      <AreaChart width={4600} height={300} data={energiesByYears} margin={{top: 10, right: 30, left: -40, bottom: 0}}>
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
        <ReferenceLine x={CURRENT_YEAR} stroke="#f50057" id={CURRENT_YEAR_LINE_ID} />
      </AreaChart>
    </Box>
  );
};
