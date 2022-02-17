// import Currency from '../Currency';
import Balance from '../Balance';
import Navigation from '../Navigation/Navigation';
import s from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={s.wrapper}>
      <Navigation></Navigation>
      <Balance />
      {/* <Currency></Currency> */}
    </div>
  );
}
