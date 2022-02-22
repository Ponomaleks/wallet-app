import { useEffect, useState } from 'react';
import s from './DiagramTab.module.css';
import Chart from './Chart/Chart';
import Table from './Table/Table';
import { useSelector } from 'react-redux';
import { getAllTransactions } from '../../redux/transactions';

import dates from '../../service/monthAndYear';
import { costCategories } from '../../service/categoriesList';

const { currentYear, currentMonth, months } = dates;

function getIncome(transactions, month, year) {
  return transactions.reduce((acc, el) => {
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

export default function DiagramTab() {
  const [allTransactions] = useState(useSelector(getAllTransactions));
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [income, setIncome] = useState(
    getIncome(allTransactions, currentMonth, currentYear),
  );
  const [filteredData, setFilteredData] = useState(
    prepareData(allTransactions, currentMonth, currentYear),
  );

  const handleChangeYear = ({ target: { value } }) => {
    setYear(Number(value));
  };
  const handleChangeMonth = ({ target: { value } }) => {
    setMonth(value);
  };

  useEffect(() => {
    setFilteredData(prepareData(allTransactions, month, year));
    setIncome(getIncome(allTransactions, month, year));
  }, [allTransactions, month, year]);

  return (
    <div className={s.tab}>
      <h2 className={s.header}>Statistics</h2>
      <div className={s.wrapper}>
        {filteredData.length ? (
          <Chart statistics={filteredData}></Chart>
        ) : (
          <h4 className={s.noChart}>Choose another period</h4>
        )}
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
// можно добавить функционал добавления категорий (создать категорию, добавить цвет, отправить в БД, сохранить в state, добавить options в модалку (убрать валидацию по списку категорий а БД))
