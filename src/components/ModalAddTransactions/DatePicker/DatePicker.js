import React from 'react';
import DatePicker from 'react-datepicker';
import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import 'react-datepicker/dist/react-datepicker.css';

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

export default function DataPicker({ value, onChange }) {
  const [locale, setLocale] = React.useState('en');
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={localeMap[locale]}
    >
      <DatePicker
        mask={maskMap[locale]}
        selected={value}
        onChange={date => {
          return onChange('date', date);
        }}
        dateFormat="dd.MM.yyyy"
      />
    </LocalizationProvider>
  );
}