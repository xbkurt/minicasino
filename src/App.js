import { Provider } from 'react-redux';
import MainRouter from './router';
import store from 'store/index';
import Header from 'components/Header';
import SideBar from 'components/Sidebar';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SideBar />
      <MainRouter store={store} />
    </Provider>
  );
}

export default App;
