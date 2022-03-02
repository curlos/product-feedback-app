import React from 'react'
import Image from 'next/image'
import styles from '../styles/FeedbackList.module.scss'

const FeedbackList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <div>
            <Image src="/assets/suggestions/icon-suggestions.svg" alt="" width={24} height={24}/>
          </div>

          <div>0 Suggestions</div>

          <div>Sort by: Most Upvotes</div>
        </div>

        <div>
          <button type="button" className={styles.addFeedback}>
            Add Feedback
          </button>
        </div>
      </div>

      <div>
        <Image src="/assets/suggestions/illustration-empty.svg" alt="" width={128} height={128}/>
      </div>
    </div>
  )
}

export default FeedbackList