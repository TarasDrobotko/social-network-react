import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import React from 'react';
import s from './Login.module.css';

const validate = (values) => {
  const errors = {};
  // Add the touched to avoid the validator validating all fields at once
  if (!values.login) {
    errors.login = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length <= 8) {
    errors.password = 'Must be more than 8 characters';
  }
  return errors;
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      rememberMe: true
    },
    validate,
    onSubmit: (values) => {
      // Do stuff here...
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name={'login'}
          placeholder={'Login'}
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        {formik.errors.login ? (
          <div className={s.error}>{formik.errors.login}</div>
        ) : null}
      </div>
      <div>
        <input
          name={'password'}
          placeholder={'Password'}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className={s.error}>{formik.errors.password}</div>
        ) : null}
      </div>

      <div>
        <input name={'rememberMe'} type={'checkbox'} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
