import React from 'react'
import styles from '../styles/RoadmapOptions.module.scss'

const RoadmapOptions = ({ plannedRequests, inProgressRequests, liveRequests, filter, setFilter }) => {

  return (
    <div className={styles.container}>
      <div className={`${styles.option} ${filter === 'planned' ? styles.selected : ''}`} onClick={() => setFilter('planned')}>Planned ({plannedRequests.length})</div>
      <div className={`${styles.option} ${filter === 'in-progress' ? styles.selected : ''}`} onClick={() => setFilter('in-progress')}>In-Progress ({inProgressRequests.length})</div>
      <div className={`${styles.option} ${filter === 'live' ? styles.selected : '' }`} onClick={() => setFilter('live')}>Live ({liveRequests.length})</div>
    </div>
  )
}

export default RoadmapOptions