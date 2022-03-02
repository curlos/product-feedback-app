import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from '../utils/getData'
import styles from '../styles/RoadmapPage.module.scss'
import RoadmapCard from '../components/RoadmapCard'

const roadmap = () => {
  const { productRequests } = getData()
  const plannedRequests = productRequests.filter((request) => request.status === 'planned')
  const inProgressRequests = productRequests.filter((request) => request.status === 'in-progress')
  const liveRequests = productRequests.filter((request) => request.status === 'live')

  console.log(productRequests)

  console.log(plannedRequests)
  console.log(inProgressRequests)

  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <div>
          <Link href={`/`} passHref>
            <button className={styles.backButton}>
              <Image src="/assets/shared/icon-arrow-left.svg" alt="" width={8} height={8} />
              Go Back
            </button>
          </Link>
          <h2>Roadmap</h2>
        </div>

        <Link href="/feedback/new" passHref>
          <button type="button" className={styles.addFeedback}>
            <Image src="/assets/shared/icon-plus.svg" alt="" width={10} height={10} />
            Add Feedback
          </button>
        </Link>
      </div>

      <div className={styles.sections}>

        <div className={styles.section}>
          <h3>Planned ({plannedRequests.length})</h3>
          <p>Ideas prioritized for research</p>

          <div className={styles.requests}>
            {plannedRequests.map((request) => (
              <RoadmapCard key={request.id} request={request} />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>In-Progress ({inProgressRequests.length})</h3>
          <p>Currently being developed</p>

          <div className={styles.requests}>
            {inProgressRequests.map((request) => (
              <RoadmapCard key={request.id} request={request} />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Live ({liveRequests.length})</h3>
          <p>Released features</p>

          <div className={styles.requests}>
            {liveRequests.map((request) => (
              <RoadmapCard key={request.id} request={request} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default roadmap