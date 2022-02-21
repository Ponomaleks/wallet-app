import s from './BackdropFilter.module.css';

export default function BackdropFilter(props) {
  return <div className={s.filter}>{props.children}</div>;
}
