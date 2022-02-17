import Chart from './Chart/Chart';
import Table from './Table/Table';
import s from './DiagramTab.module.css';

//=======test data
import statistics from '../../devData.json';

// //========

export default function DiagramTab() {
  return (
    <div className={s.tab}>
      <h2 className={s.header}>Statistics</h2>
      <div className={s.wrapper}>
        {statistics.length ? <Chart statistics={statistics}></Chart> : null}
        <Table data={statistics}></Table>
      </div>
    </div>
  );
}
