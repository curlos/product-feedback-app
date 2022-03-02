import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Dropdown.module.scss'

const OPTIONS = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug']

const CategoriesDropdown = () => {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(OPTIONS[0])

  return (
    <div className={styles.dropdown}>
      <button className={`${styles.dropdownButton}${open ? (' ' + styles.active) : ''}`} onClick={() => setOpen(!open)}>
        <div>{selected}</div>
        <Image src="/assets/shared/icon-arrow-down.svg" alt="" width={11} height={8} />
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

export default CategoriesDropdown