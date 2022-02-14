import Chart from './Chart/Chart';
import Table from './Table/Table';
import s from './DiagramTab.module.css';

//=======test data
import transactions from '../../devData.json';

//========

export default function DiagramTab() {
  return (
    <>
      <h2 className={s.header}>Statistics</h2>
      <div className={s.wrapper}>
        <Chart data={transactions}></Chart>
        <Table data={transactions}></Table>
      </div>
    </>
  );
}
