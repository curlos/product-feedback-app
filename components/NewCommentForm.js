import React, { useState } from 'react'
import styles from '../styles/NewCommentForm.module.scss'

const NewCommentForm = () => {
  const MAX_CHAR_LEN = 250
  const [content, setContent] = useState('')

  return (
    <div className={styles.container}>
      <h3>Add Comment</h3>
      <textarea placeholder="Type your comment here" value={content} onChange={(e) => {
        if (e.target.value.length <= MAX_CHAR_LEN) {
          setContent(e.target.value)
        } else {
          setContent(e.target.value.slice(0,250))
        }
      }} />

      <div className={styles.bottomRow}>
        <div>
          {MAX_CHAR_LEN - content.length} characters left
        </div>
        <button>Post Comment</button>
      </div>
    </div>
  )
}

export default NewCommentForm