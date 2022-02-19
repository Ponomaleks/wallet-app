import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import s from './Chart.module.css';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ statistics }) {
  const width = 320;
  const height = 320;

  const dataArr = statistics.map(el => Number(el.amountTransaction)); // уточнить формат данніх в базе (числа/строки)
  const total = dataArr.reduce((a, b) => b + a);
  const data = {
    datasets: [
      {
        data: dataArr,
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        cutout: 110,
        borderWidth: 0,
        hoverOffset: 10,
        maintainAspectRatio: false,
      },
    ],
  };

  return (
    <>
      <div className={s.wrapper}>
        <Doughnut
          className={s.chart}
          data={data}
          width={width}
          height={height}
          options={{ maintainAspectRatio: false, responsive: true }}
        />
        {{ total } ? <span className={s.total}>₴ {total}</span> : null}
      </div>
    </>
  );
}

// идеи *
// можно закрепить цвет за каждой категорией (хранить не в БД, а в привязке к DiagramTab, т.к. цвета отображаются только в этом элементе)
