import Head from 'next/head'
import Image from 'next/image'
import LeftSidebar from '../components/LeftSidebar'
import FeedbackList from '../components/FeedbackList'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <LeftSidebar />
      <FeedbackList />
    </div>
  )
}
