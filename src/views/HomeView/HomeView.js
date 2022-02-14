import DiagramTab from '../../components/DiagramTab/DiagramTab';
import Sidebar from '../../components/Sidebar';
import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={`container ${s.homeView}`}>
      <Sidebar></Sidebar>
    </div>
  );
}
