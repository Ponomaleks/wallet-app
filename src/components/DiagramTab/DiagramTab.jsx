import { useEffect, useState } from 'react';
import s from './DiagramTab.module.css';
import Chart from './Chart/Chart';
import Table from './Table/Table';

import dates from '../../service/monthAndYear';
import { costCategories } from '../../service/categoriesList';

//=======test data
import statistics from '../../devData copy.json';
//========

const { currentYear, currentMonth, months } = dates;

function getIncome(month, year) {
  return statistics.reduce((acc, el) => {
    if (
      el.typeTransaction === '+' &&
      el.month === months.indexOf(month) + 1 &&
      el.year === year
    ) {
      return acc + el.amountTransaction;
    }
    return acc;
  }, 0);
}

function filterByDate(data, month, year) {
  return data.filter(el => {
    return (
      el.typeTransaction === '-' &&
      el.month === months.indexOf(month) + 1 &&
      el.year === year
    );
  });
}

function formatForRender(filteredData) {
  const result = [];
  for (const category of costCategories) {
    const { value, color } = category;

    const categorySum = filteredData.reduce(
      (acc, curr) => {
        if (curr.category === value) {
          acc.category = value;
          acc.sum = acc.sum + curr.amountTransaction;
        }

        return acc;
      },
      { category: '', sum: 0, color: color },
    );
    if (categorySum.category !== '') {
      result.push(categorySum);
    }
  }
  return result;
}

function prepareData(data, month, year) {
  return formatForRender(filterByDate(data, month, year));
}

const currentMonthIncomeSum = getIncome(currentMonth, currentYear);
const currentMonthCostsArr = prepareData(statistics, currentMonth, currentYear);

export default function DiagramTab() {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [income, setIncome] = useState(currentMonthIncomeSum);
  const [filteredData, setFilteredData] = useState(currentMonthCostsArr);

  const handleChangeYear = ({ target: { value } }) => {
    setYear(Number(value));
  };
  const handleChangeMonth = ({ target: { value } }) => {
    setMonth(value);
  };

  useEffect(() => {
    setFilteredData(prepareData(statistics, month, year));
    setIncome(getIncome(month, year));
  }, [month, year]);

  return (
    <div className={s.tab}>
      <h2 className={s.header}>Statistics</h2>
      <div className={s.wrapper}>
        {filteredData.length ? <Chart statistics={filteredData}></Chart> : null}
        <div className={s.tableWrapper}>
          <Table
            data={filteredData}
            income={income}
            handleChangeMonth={handleChangeMonth}
            handleChangeYear={handleChangeYear}
          ></Table>
        </div>
      </div>
    </div>
  );
}

// идеи *
// можно сделать радиобатон и выводить статистику по расходам/доходам (но нужно больше категорий дохода)
// можно закрепить цвет за каждой категорией (хранить не в БД, а в привязке к DiagramTab, т.к. цвета отображаются только в этом элементе)
// можно добавить функционал добавления категорий (создать категорию, добавить цвет, отправить в БД, сохранить в state, добавить options в модалку (убрать валидацию по списку категорий а БД))
