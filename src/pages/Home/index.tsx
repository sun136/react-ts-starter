import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getUserAsync } from '@/store/slice/user';

import styles from './index.module.css';

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((_) => _.user);

  const handleGetUser = () => {
    dispatch(getUserAsync());
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button
          className={styles.button}
          disabled={user.status === 'loading'}
          onClick={handleGetUser}
        >
          远程获取anymock用户信息
        </button>
        <p>{user.status === 'failed' && '请求错误'}</p>
        <code lang="json">{JSON.stringify(user.userInfo)}</code>
      </div>
    </div>
  );
};

export default Home;
