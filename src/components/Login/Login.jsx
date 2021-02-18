import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import s from './Login.module.css';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        rememberMe: true
      }}
      validate={(values) => {
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
      }}
      onSubmit={(values) => {
        // Do stuff here...
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field name="login" placeholder="Login" type="text" />
            <ErrorMessage name="login" component="div" className={s.error} />
          </div>
          <div>
            <Field name="password" placeholder="Password" type="text" />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>

          <div>
            <Field name="rememberMe" type="checkbox" />
            Remember me
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
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
