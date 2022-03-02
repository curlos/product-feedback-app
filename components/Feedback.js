import React from 'react'
import Image from 'next/image'
import styles from '../styles/Feedback.module.scss'

const Feedback = ({ suggestion }) => {
  console.log(suggestion)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.upvotes}>
          <Image src="/assets/shared/icon-arrow-up.svg" alt="" width={8} height={4} />
          <p>{suggestion.upvotes}</p>
        </div>

        <div className={styles.middle}>
          <h2 className={styles.title}>{suggestion.title}</h2>
          <p className={styles.description}>{suggestion.description}</p>
          <div>
            <button className={styles.category}>{suggestion.category[0].toUpperCase()}{suggestion.category.slice(1,)}</button>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <Image src="/assets/shared/icon-comments.svg" alt="" width={18} height={16} />
        <div>{suggestion.comments && suggestion.comments.length}</div>
      </div>
    </div>
  )
}

export default Feedback