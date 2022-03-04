import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from '../../utils/getData'
import Feedback from '../../components/Feedback'
import CommentList from '../../components/CommentList'
import styles from '../../styles/FeedbackDetailsPage.module.scss'
import NewCommentForm from '../../components/NewCommentForm'

const FeedbackDetail = () => {
  const router = useRouter()
  const { id }= router.query
  const [data, setData] = useState(getData())
  const suggestion = data.productRequests.find((request) => String(request.id) === String(id))
  console.log(data)

  console.log(id)
  console.log(suggestion)

  return (
    <>
      
      {suggestion ? (
        <div>
          <Head>
            <title>Product Feedback - {suggestion.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <div className={styles.container}>
          
          <div className={styles.header}>
              <Link href={`/`} passHref>
                <button className={styles.backButton}>
                  <Image src="/assets/shared/icon-arrow-left.svg" alt="" width={8} height={8} />
                  Go Back
                </button>
              </Link>

              <button className={styles.editFeedbackButton}>Edit Feedback</button>
            </div>

            <Feedback suggestion={suggestion} />

            <CommentList comments={suggestion.comments} />

            <NewCommentForm />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default FeedbackDetail