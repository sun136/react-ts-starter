import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import PrimaryLayout from './layouts/PrimaryLayout';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PrimaryLayout />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
