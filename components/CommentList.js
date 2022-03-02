import React from 'react'
import Comment from './Comment'
import styles from '../styles/CommentList.module.scss'


const CommentList = ({ comments }) => {

  const getTotalComments = (comments) => {
    let sum = 0

    for (let comment of comments) {
      sum += (1 + (comment.replies ? comment.replies.length : 0))
    }

    return sum
  }

  console.log(comments)

  return (
    <>
    {comments ? (
      <div className={styles.container}>
        <h2>{getTotalComments(comments)} Comments</h2>
        {comments.map((comment, i) => (
          <Comment key={comment.id} comment={comment} isLastComment={i === comments.length - 1}/>
        ))}
      </div>
    ) : (
      <div>Loading...</div>
    )}
    </>
  )
}

export default CommentList