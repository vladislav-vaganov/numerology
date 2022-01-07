import React from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import {DatePicker} from '@mui/lab';
import {isValid, isBefore} from 'date-fns';

const MIN_DATE = new Date('01.01.1000');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidDate = (date: any): boolean => isValid(date) && !isBefore(date, MIN_DATE);

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
          minDate={MIN_DATE}
          onChange={(date) => {
            setBirthDate(date);
            if (isValidDate(date)) {
              console.dir(date);
            }
          }}
          renderInput={(params) => (
            <TextField {...params} inputProps={{...params.inputProps, placeholder: 'дд.мм.гггг'}} />
          )}
        />
      </Box>
      <Box>{isValidDate(birthDate) && <Typography>{birthDate?.toString()}</Typography>}</Box>
    </Stack>
  );
};
