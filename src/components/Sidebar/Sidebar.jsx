import Currency from '../Currency';
import Navigation from '../Navigation/Navigation';
import Media from 'react-media';
import s from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={s.wrapper}>
      <div>
        <Navigation></Navigation>
      </div>
      <Media query="(min-width: 768px)" render={() => <Currency></Currency>} />
    </div>
  );
}
