import React from 'react'
import styles from '../styles/Comment.module.scss'
import Image from 'next/image'

const Comment = ({ comment, isLastComment, isReply }) => {
  console.log(comment)
  console.log(comment && comment.replies)


  return (
    <>
    {comment && (
      <div className={`${styles.container}${!isLastComment && !isReply ? (' ' + styles.bottomBorderGray) : ''} ${isReply ? ('' + styles.replyWrapper) : ''}`}>
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
              <span className={styles.replyTag}>
                {isReply && (`@${comment.replyingTo} `)}
              </span>
              <span>{comment.content}</span>
            </div>
          </div>
        </div>

        {comment.replies && comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} isReply={true} />
        ))}
      </div>
    )}
    </>
  )
}

export default Comment