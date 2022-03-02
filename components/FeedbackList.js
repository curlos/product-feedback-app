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

        <button type="button" className={styles.addFeedback}>
          Add Feedback
        </button>
      </div>

      <div className={styles.noFeedbackWrapper}>
        <div className={styles.noFeedback}>
          <Image src="/assets/suggestions/illustration-empty.svg" alt="" width={'129px'} height={'136px'}/>

          <h2>There is no feedback yet.</h2>
          <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>

          <div>
            <button type="button" className={styles.addFeedback}>
              Add Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackList