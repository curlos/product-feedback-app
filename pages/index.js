import Head from 'next/head'
import Image from 'next/image'
import LeftSidebar from '../components/LeftSidebar'
import FeedbackList from '../components/FeedbackList'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product Feedback - Suggestions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.container}>
        <LeftSidebar />
        <FeedbackList />
      </div>
    </div>
  )
}
