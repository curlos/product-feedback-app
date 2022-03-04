import React from 'react'
import Comment from './Comment'
import styles from '../styles/CommentList.module.scss'
import { getTotalComments } from '../utils/getTotalComments'


const CommentList = ({ comments }) => {

  console.log(comments)

  return (
    <>
    {comments && (
      <div className={styles.container}>
        <h2>{getTotalComments(comments)} Comments</h2>
        {comments.map((comment, i) => (
          <Comment key={comment.id} comment={comment} isLastComment={i === comments.length - 1}/>
        ))}
      </div>
    )}
    </>
  )
}

export default CommentList