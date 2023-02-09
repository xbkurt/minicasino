import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from 'actions/login';
import { clearLogoutStatus } from 'actions/logout';

import { Typography } from 'antd';
import './index.scss';
import { Formik } from 'formik';
const { Title } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const serviceError = useSelector((state) => state.login.error);
  const status = useSelector((state) => state.login.status);

  useEffect(() => {
    localStorage.setItem('localToken', JSON.stringify(false));

    setTimeout(() => {
      dispatch(clearLogoutStatus());
      localStorage.setItem('userInfo', JSON.stringify(null));
    }, 400);
  }, []);

  if (status === 'success') {
    return <Navigate to={'/home'} />;
  }

  return (
    <div className='center'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Username is required';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const { username, password } = values;
            dispatch(login({ username, password }));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Title className='center login-title' level={2}>
              Login
            </Title>
            <div className='center form-container'>
              <Title className='center login-title' level={4}>
                Username
              </Title>
              <input
                className='username-input'
                placeholder='Enter username'
                type='username'
                name='username'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values ? values.username : ''}
              />
              <p className='validation-error'>
                {errors.username && touched.username && errors.username}
              </p>
              <Title className='center login-title' level={4}>
                Password
              </Title>
              <input
                className='password-input'
                type='password'
                name='password'
                placeholder='Enter password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values ? values.password : ''}
              />
              <p className='validation-error'>
                {errors.password && touched.password && errors.password}
              </p>
              <button
                className='submit-button'
                type='submit'
                disabled={isSubmitting}
              >
                Submit
              </button>
              {Object.keys(serviceError).length > 0 && (
                <p className='validation-error'>{serviceError}</p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
