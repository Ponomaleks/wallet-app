import formatNumber from '../../../service/formatNumber';
import dates from '../../../service/monthAndYear';
import s from './Table.module.css';

const { currentYear, currentMonth, months, years } = dates;

export default function Table({
  data,
  income = 0,
  handleChangeMonth,
  handleChangeYear,
}) {
  const costs = data.reduce((acc, curr) => {
    return acc + curr.sum;
  }, 0);

  return (
    <>
      <div className={s.selectWrapper}>
        <select
          onChange={handleChangeMonth}
          className={s.monthSelect}
          defaultValue={currentMonth}
        >
          {months.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
          <option key="full" value="full">
            Full year
          </option>
        </select>
        <select
          onChange={handleChangeYear}
          className={s.yearSelect}
          defaultValue={currentYear}
        >
          {years.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
          <option key="full" value="full">
            All years
          </option>
        </select>
      </div>

      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.tableFirstCol}>Category</th>
            <th className={s.tableSecondCol}>Sum</th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {data.length ? (
            data.map(({ category, sum, color, _id }, id) => (
              <tr key={id}>
                <td className={s.tableData}>
                  <span
                    className={s.mark}
                    style={{ backgroundColor: color }}
                  ></span>

                  {category}
                </td>
                <td className={s.tableData}>
                  {formatNumber(sum, {
                    precision: 2,
                    thousand: ' ',
                  })}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={s.tableData}>No cost data for this period</td>
            </tr>
          )}
        </tbody>
        <tfoot className={s.tableFooter}>
          <tr>
            <th className={s.costs}>Costs:</th>
            <td className={s.costs_sum}>
              {formatNumber(costs, {
                precision: 2,
                thousand: ' ',
              })}
            </td>
          </tr>
          <tr>
            <th className={s.income}>Income:</th>
            <td className={s.income_sum}>
              {formatNumber(income, {
                precision: 2,
                thousand: ' ',
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
