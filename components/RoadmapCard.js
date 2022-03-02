import React from 'react'
import Image from 'next/image'
import styles from '../styles/RoadmapCard.module.scss'
import { getTotalComments } from '../utils/getTotalComments'

const RoadmapCard = ({ request }) => {
  console.log(request)

  const getCategoryColor = () => {
    console.log(request.category)

    switch (request.status) {
      case 'planned':
        return 'bgYellow'
      case 'in-progress':
        return 'bgPurple'
      default:
        return 'bgGreen'
    }
  }

  return (
    <div className={styles.container}>
      <div className={[styles.highlight, styles[getCategoryColor()]].join(' ')} />

      <div className={styles.contentWrapper}>
        <div className={styles.status}>
          <div className={[styles.circle, styles[getCategoryColor()]].join(' ')} />
          <span>{request.status[0].toUpperCase() + request.status.slice(1,)}</span>  
        </div>

        <h4 className={styles.title}>{request.title}</h4>
        <p className={styles.desc}>{request.description}</p>

        <div>
          <button className={styles.category}>{request.category[0].toUpperCase() + request.category.slice(1,)}</button>
        </div>

        <div className={styles.bottomRow}>
          <button className={styles.upvotes}>
            <Image src="/assets/shared/icon-arrow-up.svg" alt="" width={8} height={4} />
            <p>{request.upvotes}</p>
          </button>

          <div className={styles.right}>
            <Image src="/assets/shared/icon-comments.svg" alt="" width={18} height={16} />
            <div>{request.comments ? (
              getTotalComments(request.comments)
            ) : (
              <span className={styles.noComments}>0</span>
            )}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapCard