import React, { useState } from 'react'
import styles from '../styles/LeftSidebar.module.scss'

const LeftSidebar = () => {

  const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  const [selected, setSelected] = useState('All')

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
    </div>
  )
}

export default LeftSidebar