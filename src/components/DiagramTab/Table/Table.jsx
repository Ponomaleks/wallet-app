import formatNumber from '../../../service/formatNumber';
import s from './Table.module.css';

const costs = '1000000';
const income = '1000000';

export default function Table({ data }) {
  return (
    <>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.tableFirstCol}>Category</th>
            <th className={s.tableSecondCol}>Sum</th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {data.map(({ category, amountTransaction, _id }) => (
            <tr key={_id}>
              <td className={s.tableData}>
                {/* <span className={s.mark} style={{ backgroundColor: color }}></span> */}

                {category}
              </td>
              <td className={s.tableData}>
                {formatNumber(amountTransaction, {
                  precision: 2,
                  thousand: ' ',
                })}
              </td>
            </tr>
          ))}
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
