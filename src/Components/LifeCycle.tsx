import React from 'react';
import {Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import {calcCharacterRingNumbers, reduceNumberToDigit} from '../utils';

export interface LifeCycleProps {
  birthDate: Date;
}

export const LifeCycle = ({birthDate}: LifeCycleProps): React.ReactElement => {
  const characterRingNumbers = calcCharacterRingNumbers(birthDate);

  return (
    <Box>
      {/* <Typography display="inline">Циклы жизни: </Typography>
      <Typography display="inline" color="primary">
        {characterRingNumbers.join('. ')}
      </Typography>
         <TableContainer component={Paper} sx={{width: 200, backgroundColor: '#f2f2f2'}}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell variant="head" sx={{backgroundColor: '#cfcfcf'}}>
                    Header 1
                  </TableCell>
                  <TableCell>Cell 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" sx={{backgroundColor: '#cfcfcf'}}>
                    Header 1
                  </TableCell>
                  <TableCell>Cell 2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer> */}
    </Box>
  );
};
