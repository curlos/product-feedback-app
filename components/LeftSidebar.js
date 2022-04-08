import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/LeftSidebar.module.scss'
import { getData } from '../utils/getData'

const LeftSidebar = () => {

  const { productRequests } = getData()
  const plannedRequests = productRequests.filter((request) => request.status === 'planned')
  const inProgressRequests = productRequests.filter((request) => request.status === 'in-progress')
  const liveRequests = productRequests.filter((request) => request.status === 'live')

  const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  const [selectedFilter, setSelectedFilter] = useState('All')

  const [roadmap, setRoadmap] = useState({
    planned: {
      name: 'Planned',
      num: plannedRequests.length,
      color: 'bgYellow'
    },
    inProgress: {
      name: 'In-Progress',
      num: inProgressRequests.length,
      color: 'bgPurple'
    },
    live: {
      name: 'Live',
      num: liveRequests.length,
      color: 'bgGreen'
    }
  })
  

  return (
    <div className={styles.container}>
      <div className={styles.cardBoardName}>
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>

      <div className={styles.cardBoardTags}>
        {tags.map((tag) => (
          <div key={tag} className={`${styles.tag}${tag === selectedFilter ? (' ' + styles.selected) : ''}`} onClick={() => setSelectedFilter(tag)}>
            {tag}
          </div>
        ))}
        
      </div>

      <div className={styles.cardRoadmap}>
        <div className={styles.topNav}>
          <h2>Roadmap</h2>
          <Link href="/roadmap" passHref>
            <button>View</button>  
          </Link>  
        </div>
        

        <div className={styles.rows}>
          {Object.values(roadmap).map((label) => (
            <div key={label.name} className={styles.row}>
              <div className={styles.rowLeft}>
                <div className={`${styles.circle} ${styles[label.color]}`}/>

                <div className={styles.label}>{label.name}</div>
              </div>

              <div className={styles.num}>{label.num}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar