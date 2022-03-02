import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Dropdown.module.scss'

const OPTIONS = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments']

const SortDropdown = () => {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(OPTIONS[0])

  return (
    <div className={`${styles.dropdown} ${styles.dark}`}>
      <button className={`${styles.dropdownButton}`} onClick={() => setOpen(!open)}>
        <div>Sort by: <span className={styles.selected}>{selected}</span></div>
        <Image src={`/assets/shared/icon-arrow-${open ? 'up' : 'down'}.svg`} alt="" width={11} height={8} className={styles.arrow} />
      </button>
      {open && (
        <div className={styles.dropdownContent}>
          {OPTIONS.map((option) => (
            <div key={option} className={styles.option} onClick={() => setSelected(option)}>
              <div>{option}</div>
              {selected === option && (
                <Image src="/assets/shared/icon-check.svg" alt="" width={11} height={8} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortDropdown