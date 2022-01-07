import React from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import {DatePicker} from '@mui/lab';
import {MIN_BIRTH_DATE} from './constants';
import {isValidBirthDate} from './utils';
import {PersonalEnergy} from './PersonalEnergy';

export const Calculator = (): React.ReactElement => {
  const [birthDate, setBirthDate] = React.useState<Date | null>(null);

  return (
    <Stack spacing={2} sx={{px: {xs: 2, sm: 3}}}>
      <Box>
        <DatePicker
          disableFuture
          label="Дата рождения"
          mask="__.__.____"
          openTo="year"
          views={['year', 'month', 'day']}
          value={birthDate}
          minDate={MIN_BIRTH_DATE}
          onChange={(date) => {
            setBirthDate(date);
            if (isValidBirthDate(date)) {
              console.dir(date);
            }
          }}
          renderInput={(params) => (
            <TextField {...params} inputProps={{...params.inputProps, placeholder: 'дд.мм.гггг'}} />
          )}
        />
      </Box>
      <PersonalEnergy birthDate={birthDate} />
    </Stack>
  );
};
