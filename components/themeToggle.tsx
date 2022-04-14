import {useTheme} from 'next-themes';
import styles from './themeToggle.module.scss';

const ButtonToggleDarkMode = () => {
  const {theme, setTheme} = useTheme();

  return (
    <div>
      <input
        type='checkbox'
        className={styles.checkbox}
        onChange={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
        checked={theme == 'dark' ? true : false}
        id='chk'
      />
      <label className={styles.label} htmlFor='chk'>
        <i className={`fas fa-moon ${styles.faMoon}`}></i>
        <i className={`fas fa-sun ${styles.faSun}`}></i>
        <div className={styles.ball}></div>
      </label>
    </div>
  );
};

export default ButtonToggleDarkMode;
