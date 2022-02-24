import { useEffect, useState } from 'react';
import s from './DiagramTab.module.css';
import Chart from './Chart/Chart';
import Table from './Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStatistics,
  getStatistics,
  getCosts,
  getIncome,
} from '../../redux/statistics';
import dates from '../../service/monthAndYear';

const { currentYear, currentMonth, months } = dates;

export default function DiagramTab() {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  // const [costs] = useState(useSelector(getCosts));
  // const [income] = useState(useSelector(getIncome));

  const handleChangeYear = ({ target: { value } }) => {
    setYear(value);
  };
  const handleChangeMonth = ({ target: { value } }) => {
    setMonth(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const filterCosts = (month, year) => {
      const monthQuery = month !== 'full' ? months.indexOf(month) + 1 : 'full';
      dispatch(fetchStatistics({ month: monthQuery, year: year }));
    };

    filterCosts(month, year);
  }, [dispatch, month, year]);

  const backStatistics = useSelector(getStatistics);
  const costs = useSelector(getCosts);
  const income = useSelector(getIncome);

  return (
    <div className={s.tab}>
      <h2 className={s.header}>Statistics</h2>
      <div className={s.wrapper}>
        {backStatistics.length ? (
          <Chart statistics={backStatistics}></Chart>
        ) : (
          <h4 className={s.noChart}>Choose another period</h4>
        )}
        <div className={s.tableWrapper}>
          <Table
            data={backStatistics}
            income={income}
            costs={costs}
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
