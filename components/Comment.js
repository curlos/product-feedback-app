import React from 'react'
import styles from '../styles/Comment.module.scss'
import Image from 'next/image'

const Comment = ({ comment, isLastComment }) => {
  console.log(comment)

  console.log(isLastComment)


  return (
    <>
    {comment ? (
      <div className={`${styles.container}${!isLastComment ? (' ' + styles.bottomBorderGray) : ''}`}>
        <div className={styles.commentInfo}>
          <div>
            <Image src={comment.user.image.slice(1,)} alt="" width={40} height={40} className={styles.userImage} />
          </div>

          <div className={styles.right}>
            <div className={styles.top}>
              <div>
                <div className={styles.name}>{comment.user.name}</div>
                <div className={styles.username}>@{comment.user.username}</div>
              </div>

              <div>
                <button className={styles.replyButton}>Reply</button>
              </div>
            </div>

            <div className={styles.content}>
              {comment.content}
            </div>
          </div>
        </div>

        <div>a</div>
      </div>
    ) : (
      <div>Loading...</div>
    )}
    </>
  )
}

export default Comment