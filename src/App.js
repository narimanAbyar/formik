import React from "react";
import { Formik,Field,Form,ErrorMessage } from "formik";
import * as Yup from "yup";

function App(){
  
  const SchemaLoginForm = Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/,
        "Password has wrong character."
      )
      .required("Password is required"),
  });

  return(
    <Formik
    validationSchema={SchemaLoginForm}
    initialValues={{username:"",password:""}}
    onSubmit={(values)=>{
      alert("username"+values.username+"password"+values.password)
    }}
    >
      {(()=>(
        <Form>
          <div>
            <label htmlFor="username">username</label>
            <Field type="username" name="username"/>
            <ErrorMessage name="username">
              {(msg) => <di>{msg}</di>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <Field type="password" name="password"/>
            <ErrorMessage name="password">
              {(msg) => <di>{msg}</di>}
            </ErrorMessage>
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </Form>
      )

      )}
    </Formik>
  )
}

export default App;