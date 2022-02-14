import Currency from '../Currency';
import Navigation from '../Navigation/Navigation';
import s from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={s.wrapper}>
      <Navigation></Navigation>
      <Currency></Currency>
    </div>
  );
}
