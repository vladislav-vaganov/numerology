import React from 'react';
import {Box, Stack, TextField} from '@mui/material';
// import {Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField} from '@mui/material';
import {DatePicker} from '@mui/lab';
import {LifePathNumber} from './LifePathNumber';
import {PersonalEnergy} from './PersonalEnergy';
import {MAX_BIRTH_DATE, MIN_BIRTH_DATE} from '../constants';
import {NullableDate} from '../types';
import {isValidBirthDate} from '../utils';
import {CharacterRing} from './CharacterRing';

export const Calculator = (): React.ReactElement => {
  const [birthDate, setBirthDate] = React.useState<NullableDate>(null);

  return (
    <Stack spacing={2} sx={{px: {xs: 2, sm: 3}}}>
      <Box>
        <DatePicker
          disableFuture
          label="Дата рождения"
          cancelText={null}
          okText="Закрыть"
          mask="__.__.____"
          openTo="year"
          views={['year', 'month', 'day']}
          value={birthDate}
          minDate={MIN_BIRTH_DATE}
          maxDate={MAX_BIRTH_DATE}
          onChange={(date) => {
            setBirthDate(date);
          }}
          renderInput={(params) => (
            <TextField {...params} inputProps={{...params.inputProps, placeholder: 'дд.мм.гггг'}} />
          )}
        />
      </Box>
      {birthDate && isValidBirthDate(birthDate) ? (
        <Stack spacing={2}>
          <LifePathNumber birthDate={birthDate} />
          <CharacterRing birthDate={birthDate} />
          <PersonalEnergy birthDate={birthDate} />
          {/* <TableContainer component={Paper} sx={{width: 200, backgroundColor: '#f2f2f2'}}>
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
        </Stack>
      ) : null}
    </Stack>
  );
};
