import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from '../utils/getData'
import styles from '../styles/RoadmapPage.module.scss'
import RoadmapCard from '../components/RoadmapCard'
import RoadmapOptions from '../components/RoadmapOptions'

const Roadmap = () => {
  const { productRequests } = getData()
  const plannedRequests = productRequests.filter((request) => request.status === 'planned')
  const inProgressRequests = productRequests.filter((request) => request.status === 'in-progress')
  const liveRequests = productRequests.filter((request) => request.status === 'live')
  const [filter, setFilter] = useState('planned')
  const [selectedRequests, setSelectedRequests] = useState(plannedRequests)

  console.log(plannedRequests)

  const requestsObj = {
    'planned': {
      name: 'Planned',
      description: 'Ideas prioritized for research',
      requests: [...plannedRequests]
    },
    'in-progress': {
      name: 'In-Progress',
      description: 'Currently being developed',
      requests: [...inProgressRequests]
    },
    'live': {
      name: 'Live',
      description: 'Released features',
      requests: [...liveRequests]
    },
  }

  console.log(productRequests)

  console.log(plannedRequests)
  console.log(inProgressRequests)

  useEffect(() => {
    switch(filter) {
      case 'planned':
        return setSelectedRequests(plannedRequests)
      case 'in-progress':
        return setSelectedRequests(inProgressRequests)
      case 'live':
        return setSelectedRequests(liveRequests)
      default:
        return setSelectedRequests(plannedRequests)
    }
  }, [filter])

  return (
    <div>
      <Head>
        <title>Product Feedback - Roadmap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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

        <div className={`${styles.sections} ${styles.tabletAndUp}`}>

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

        <RoadmapOptions plannedRequests={plannedRequests} inProgressRequests={inProgressRequests} liveRequests={liveRequests} filter={filter} setFilter={setFilter} />

        <div className={`${styles.sections} ${styles.mobileOnly}`}>
          <div className={styles.section}>
            <h3>{requestsObj[filter].name} ({selectedRequests.length})</h3>
            <p>{requestsObj[filter].description}</p>

            <div className={styles.requests}>
              {selectedRequests.map((request) => (
                <RoadmapCard key={request.id} request={request} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap