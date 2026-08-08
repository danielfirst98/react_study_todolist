import styles from './Nav.module.css';

function Nav({ name }) {
  return (
    <div className={styles.Nav}>
      <h1>{name}님의 할 일</h1>
      <p>오늘은 {new Date().toLocaleDateString('ko-KR')} 입니다.</p>
    </div>
  );
}

export default Nav;
