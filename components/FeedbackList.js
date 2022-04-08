import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/FeedbackList.module.scss'
import { getData } from '../utils/getData'
import Feedback from './Feedback'
import SortDropdown from './SortDropdown'

const FeedbackList = () => {

  const [data, setData] = useState(getData())

  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <img src="/assets/suggestions/icon-suggestions.svg" alt="" className={styles.bulbIcon}/>

          <h3 className={styles.suggestionsTitle}>
            {data.productRequests.length} Suggestions
          </h3>

          <SortDropdown />
        </div>

        <Link href="/feedback/new" passHref>
          <button type="button" className={styles.addFeedback}>
            <Image src="/assets/shared/icon-plus.svg" alt="" width={10} height={10} />
            Add Feedback
          </button>
        </Link>
      </div>

      <div className={styles.listContainer}>
        {data.productRequests.length === 0 ? (
          <div className={styles.noFeedbackWrapper}>
            <div className={styles.noFeedback}>
              <Image src="/assets/suggestions/illustration-empty.svg" alt="" width={'129px'} height={'136px'}/>

              <h2>There is no feedback yet.</h2>
              <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>

              <Link href="/feedback/new" passHref>
                <button type="button" className={styles.addFeedback}>
                  <Image src="/assets/shared/icon-plus.svg" alt="" width={10} height={10} />
                  Add Feedback
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.feedbackList}>
            {data.productRequests.map((suggestion) => (
              <Feedback key={suggestion.id} suggestion={suggestion} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FeedbackList