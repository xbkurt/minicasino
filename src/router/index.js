import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spin from 'components/Spin';

const Home = React.lazy(() => import('pages/home'));

const Login = React.lazy(() => import('pages/login'));

const MainRouter = () => {
  const token = useSelector((state) => state.token.data);
  let localToken = JSON.parse(localStorage.getItem('localToken'));

  let isPrivate = null;

  if (window.location.pathname === '/home' && token === null) {
    if (localToken) {
      isPrivate = false;
    } else {
      isPrivate = true;
    }
  }

  return (
    <Suspense fallback={<Spin />}>
      <Router>
        <Routes>
          <Route
            exact
            path='/home'
            element={isPrivate ? <Navigate replace to='/login' /> : <Home />}
          />
          <Route exact path='/login' element={<Login />} />;
          <Route path='/' element={<Navigate replace to='/login' />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default MainRouter;
