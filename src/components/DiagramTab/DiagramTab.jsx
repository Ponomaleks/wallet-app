import Chart from './Chart/Chart';
import Table from './Table/Table';
import s from './DiagramTab.module.css';
import dates from '../../service/monthAndYear';

//=======test data
import statistics from '../../devData.json';

//========
const renderData = [];
for (const item of statistics) {
  if (item.typeTransaction !== '-') {
    continue;
  }
  renderData.push(item);
}

export default function DiagramTab() {
  return (
    <div className={s.tab}>
      <h2 className={s.header}>Statistics</h2>
      <div className={s.wrapper}>
        {statistics.length ? <Chart statistics={renderData}></Chart> : null}
        <div className={s.tableWrapper}>
          <Table data={renderData}></Table>
        </div>
      </div>
    </div>
  );
}

// можно сделать радиобатон и выодить статистику по расходам/доходам (но нужно больше категорий дохода)
// можно
