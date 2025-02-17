'use client'

import styles from "./CreatePost.module.css";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function CreatePost() {

    const initalValues = {
        title : "",
        postText : "",
        username : "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!!"),
        postText: Yup.string().required("Enter the Post Text!!"),
        username: Yup.string().min(3).max(15).required("Username is Required!!"),
    })

    let navigate = useNavigate();
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response)=>{
            navigate('/')
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
                <label>Title: </label>
                <ErrorMessage className={styles.erromsg} name="title" component="span"/>
                <Field 
                id="inputCreatePost" 
                autoComplete="off"
                name="title" 
                placeholder="Random Title"/>

                <label>Post: </label>
                <ErrorMessage className={styles.erromsg} name="postText" component="span" />
                <Field 
                id="inputCreatePost" 
                autoComplete="off"
                name="postText" 
                placeholder="Hello World!"/>

                <label>Username: </label>
                <ErrorMessage className={styles.erromsg} name="username" component="span"/>
                <Field 
                id="inputCreatePost" 
                autoComplete="off"
                name="username" 
                placeholder="John123"/>

                <button type="submit">
                    Create Post
                </button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost