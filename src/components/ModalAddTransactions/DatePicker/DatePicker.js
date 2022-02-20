import * as React from 'react';
import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
  de: deLocale,
};

const maskMap = {
  fr: '__.__.____',
  en: '__.__.____',
  ru: '__.__.____',
  de: '__.__.____',
};

export default function LocalizedDatePicker() {
  const [locale, setLocale] = React.useState('ru');
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={localeMap[locale]}
    >
      <div>
        <DatePicker
          mask={maskMap[locale]}
          value={value}
          onChange={newValue => setValue(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}
