const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('en', { month: 'long' });
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = [];

const fillYears = () => {
  const start = 2020;
  for (let i = start; i <= currentYear; i++) {
    years.push(i);
  }
};
fillYears();

const dates = { currentYear, currentMonth, months, years };
export default dates;
