import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { auth } from '../services/firebase'
import {signInSchema, initialValues} from './utils'


class SignUpForm extends React.Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await auth.createUserWithEmailAndPassword(email.value, password.value);
      console.log(user)
      alert('You successfully signed up! Now you can sign in')
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
              <div className="container">
                <Form onSubmit={this.handleSignUp}>
                  <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </div>
    
                  <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        errors.password && touched.password ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
    
                  <button
                    type="submit"
                    onClick={this.props.toggle} 
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                  >
                    Register
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      
    )
  }
}

export default SignUpForm;
