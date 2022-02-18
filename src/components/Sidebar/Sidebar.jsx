import Currency from '../Currency';
import Balance from '../Balance';
import Navigation from '../Navigation/Navigation';
import Media from 'react-media';
import s from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={s.wrapper}>
      <div className={s.mobileLeft}>
        <Navigation></Navigation>
        <Balance />
      </div>
      <Media query="(min-width: 768px)" render={() => <Currency></Currency>} />
    </div>
  );
}
