'use client'

import styles from "./Home.module.css";
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

    let navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3001/posts").then((response)=>{
        setListOfPosts(response.data);
        })
    }, [])
    return (
        <div className={styles.App}>
            {listOfPosts.map((value, key)=>{
                return <div key={value.id} className={styles.post} 
                        onClick={()=>{navigate(`/post/${value.id}`)}}>
                <div className={styles.title}> {value.title} </div>
                <div className={styles.body}> {value.postText} </div>
                <div className={styles.footer}> {value.username} </div>
                </div>;
            })}
        </div>
    )
}

export default Home;