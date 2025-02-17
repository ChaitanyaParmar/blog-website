'use client'

import styles from "./Registration.module.css";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Registration() {
  const initalValues = {
    username : "",
    password : "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Username is Required!!"),
    username: Yup.string().min(4).max(20).required("Password is Required!!"),
  })

  let navigate = useNavigate();
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then((response)=>{
            console.log(data)
        })
    }

  return (
    <div className={styles.createPostPage}>
      <Formik
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        > 
            <Form className={styles.formContainer}>
                <label>Username: </label>
                <ErrorMessage className={styles.erromsg} name="username" component="span"/>
                <Field 
                id="inputCreatePost" 
                autoComplete="off"
                name="username" 
                placeholder="Username"/>

                <label>Password: </label>
                <ErrorMessage className={styles.erromsg} name="password" component="span"/>
                <Field 
                id="inputCreatePost" 
                autoComplete="off"
                name="password" 
                placeholder="Password"
                type="password"/>

                <button type="submit">
                    Create Post
                </button>
            </Form>
        </Formik>
    </div>
  )
}

export default Registration