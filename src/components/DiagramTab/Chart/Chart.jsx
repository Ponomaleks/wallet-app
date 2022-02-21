import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import s from './Chart.module.css';
import formatNumber from '../../../service/formatNumber';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ statistics }) {
  const width = 320;
  const height = 320;

  const dataArr = statistics.map(({ sum }) => sum);
  const backgroundColor = statistics.map(({ color }) => color);
  const label = statistics.map(({ category }) => category);

  const total = dataArr.reduce((a, b) => b + a);
  const data = {
    datasets: [
      {
        data: dataArr,
        backgroundColor: backgroundColor,

        cutout: '70%',
        borderWidth: 0,
        hoverOffset: 10,
        maintainAspectRatio: false,
      },
    ],
    labels: label,
  };

  return (
    <>
      <div className={s.wrapper}>
        <Doughnut
          className={s.chart}
          data={data}
          width={width}
          height={height}
          options={{
            maintainAspectRatio: false,
            layout: {
              padding: 10,
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
        {{ total } ? (
          <span className={s.total}>
            ₴{' '}
            {formatNumber(total, {
              precision: 2,
              thousand: ' ',
            })}
          </span>
        ) : null}
      </div>
    </>
  );
}
