'use client';

import styles from "./Post.module.css";
import axios from 'axios';
// import { response } from 'express';
import { useEffect, useState } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byID/${id}`).then((response)=>{
            setPostObject(response.data)
        })
        axios.get(`http://localhost:3001/comments/${id}`).then((response)=>{
            setComments(response.data)
        }) 
    }, []) // always add empty array so it doesnt go in infinite loop

    const addComment = () => {
        axios.post("http://localhost:3001/comments", {commentBody: newComment, PostId:id}).then((response)=>{
            const commentToAdd = {commentBody: newComment}
            setComments([...comments, commentToAdd])
            setNewComment("")
        })
    }

    return (
        <div className={styles.postPage}>
            <div className={styles.leftSide}>
                <div className={styles.post} id={styles.individual}>
                    <div className={styles.title}>{postObject.title}</div>
                    <div className={styles.body}>{postObject.postText}</div>
                    <div className={styles.footer}>{postObject.username}</div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.addCommentContainer}>
                    <input type="text" placeholder="Enter Comment" autoComplete="off" value={newComment} 
                    onChange={(event)=>{setNewComment(event.target.value) }}/>
                    <button onClick={addComment}>Post Comment</button>
                </div>
                <div className={styles.listOfComments}>
                    {comments.map((comment, key) => {
                        return <div key={key} className={styles.comment}>{comment.commentBody}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Post