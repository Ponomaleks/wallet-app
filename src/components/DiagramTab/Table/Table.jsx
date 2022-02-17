// import TableBody from './TableBody/TableBody';
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
              <td className={s.tableData}>{amountTransaction}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Costs:</th>
            <td>{costs}</td>
          </tr>
          <tr>
            <th>Income:</th>
            <td>{income}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
