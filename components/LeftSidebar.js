import React, { useState } from 'react'
import styles from '../styles/LeftSidebar.module.scss'

const LeftSidebar = () => {

  const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  const [selected, setSelected] = useState('All')
  const [roadmap, setRoadmap] = useState({
    planned: {
      name: 'Planned',
      num: '2',
      color: 'bgYellow'
    },
    inProgress: {
      name: 'In-Progress',
      num: '3',
      color: 'bgPurple'
    },
    live: {
      name: 'Live',
      num: '1',
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
          <div key={tag} className={`${styles.tag}${tag === selected ? (' ' + styles.selected) : ''}`}>
            {tag}
          </div>
        ))}
        
      </div>

      <div className={styles.cardRoadmap}>
        <div className={styles.topNav}>
          <h2>Roadmap</h2>
          <button>View</button>  
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