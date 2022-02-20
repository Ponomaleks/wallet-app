import { useEffect, useState } from 'react';
import s from './DiagramTab.module.css';
import Chart from './Chart/Chart';
import Table from './Table/Table';

import dates from '../../service/monthAndYear';

//=======test data
import statistics from '../../devData copy.json';
const { currentYear, currentMonth, months, years } = dates;

//========

const currentMonthCosts = statistics.filter(el => {
  return (
    el.typeTransaction === '-' &&
    el.month === months.indexOf(currentMonth) + 1 &&
    el.year === currentYear
  );
});

const currentMonthIncomeSum = statistics.reduce((acc, curr) => {
  if (curr.typeTransaction === '+') {
    return acc + curr.amountTransaction;
  }
  return acc;
}, 0);

console.log(currentMonthIncomeSum);

// const renderData = [];
// for (const item of statistics) {
//   if (item.typeTransaction !== '-') {
//     continue;
//   }
//   renderData.push(item);
// }

export default function DiagramTab() {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [income, setIncome] = useState(0);
  const [filteredData, setFilteredData] = useState(currentMonthCosts);

  return (
    <div className={s.tab}>
      <h2 className={s.header}>Statistics</h2>
      <div className={s.wrapper}>
        {statistics.length ? <Chart statistics={filteredData}></Chart> : null}
        <div className={s.tableWrapper}>
          <Table data={filteredData}></Table>
        </div>
      </div>
    </div>
  );
}

// идеи *
// можно сделать радиобатон и выодить статистику по расходам/доходам (но нужно больше категорий дохода)
// можно закрепить цвет за каждой категорией (хранить не в БД, а в привязке к DiagramTab, т.к. цвета отображаются только в этом элементе)
// можно добавить функционал добавления категорий (создать категорию, добавить цвет, отправить в БД, сохранить в state, добавить options в модалку (убрать валидацию по списку категорий а БД))
