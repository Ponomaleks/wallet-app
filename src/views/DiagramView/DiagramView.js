import DiagramTab from '../../components/DiagramTab/DiagramTab';
import Sidebar from '../../components/Sidebar';
import s from './DiagramView.module.css';
import Header from '../../components/Header';
import BackdropFilter from '../../components/BackdropFilter/BackdropFilter';

export default function DiagramView() {
  return (
    <>
      <Header />
      <BackdropFilter>
        <div id="diagram" className={`container ${s.diagramView}`}>
          <Sidebar></Sidebar>
          <DiagramTab></DiagramTab>
        </div>
      </BackdropFilter>
    </>
  );
}
