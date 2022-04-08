import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <strong>Frontend Mentor</strong>
        <p>Feedback Board</p>
      </div>

      <div className={styles.right}>
        <Image src="/assets/shared/mobile/icon-hamburger.svg" alt="" width={20} height={17} />
      </div>
    </div>
  )
}

export default Navbar