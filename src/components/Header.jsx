import styles from './Header.module.css'
import ignitelogo from '../assets/ignite-logo.svg';

export function Header(){
  return(
    <header className={styles.header}>
      <img src= {ignitelogo} alt="Logo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}