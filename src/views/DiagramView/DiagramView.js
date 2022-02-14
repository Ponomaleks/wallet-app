import DiagramTab from '../../components/DiagramTab/DiagramTab';
import Sidebar from '../../components/Sidebar';
import s from './DiagramView.module.css';

export default function DiagramView() {
  return (
    <div className={`container ${s.diagramView}`}>
      <Sidebar></Sidebar>
      <DiagramTab></DiagramTab>
    </div>
  );
}
