import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/FeedbackForm.module.scss'
import Dropdown from '../../components/Dropdown'

const CATEGORIES = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug']

const NewFeedbackPage = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [detail, setDetail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting form')
  }


  return (
    <div className={styles.container}>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Link href={`/`} passHref>
            <button className={styles.backButton}>
              <Image src="/assets/shared/icon-arrow-left.svg" alt="" width={8} height={8} />
              Go Back
            </button>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>

          <button className={styles.addIconButton}>
            <Image src="/assets/shared/icon-new-feedback.svg" alt="" width={56} height={56} />
          </button>

          <h2>Create New Feedback</h2>

          <div className={styles.section}>
            <label htmlFor="title" className={styles.labelTitle}>Feedback Title</label><br />
            <label htmlFor="title" className={styles.labelDesc}>Add a short, descriptive headline</label><br />
            <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className={styles.section}>
            <label htmlFor="category" className={styles.labelTitle}>Category</label><br />
            <label htmlFor="category" className={styles.labelDesc}>Choose a cateogry for your feedback</label><br />
            <input name="category" value={category} onChange={(e) => setCategory(e.target.value)} />

            <Dropdown options={CATEGORIES} />
          </div>

          <div className={styles.section}>
            <label htmlFor="detail" className={styles.labelTitle}>Feedback Detail</label><br />
            <label htmlFor="detail" className={styles.labelDesc}>Include any specific comments on what should be improved, added, etc.</label><br />
            <textarea name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.cancel}>
              Cancel
            </button>

            <button className={styles.add}>
              Add Feedback
            </button>
          </div>
          


        </form>
      </div>
    </div>
  )
}

export default NewFeedbackPage