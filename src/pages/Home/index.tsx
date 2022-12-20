import { useImmer } from 'use-immer';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getUserAsync } from '@/store/slice/user';

import styles from './index.module.css';

const Home = () => {
  const dispatch = useAppDispatch();
  const [immer, updateImmer] = useImmer({ titile: 'Welcome!' });
  const { userInfo, status } = useAppSelector((_) => _.user);

  const handleUpdateTitle = () => {
    updateImmer((state) => {
      state.titile = 'You changed it';
    });
  };

  const handleGetUser = () => {
    dispatch(getUserAsync());
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button className={styles.button} onClick={handleUpdateTitle}>
          use immer
        </button>
        <p>{immer.titile}</p>
      </div>
      <div className={styles.box}>
        <button className={styles.button} disabled={status === 'loading'} onClick={handleGetUser}>
          send request{status === 'loading' ? '...' : ''}
        </button>
        <p>{status === 'failed' && '请求错误'}</p>
        <code lang="json">{JSON.stringify(userInfo)}</code>
      </div>
    </div>
  );
};

export default Home;
