import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/FeedbackForm.module.scss'
import Dropdown from '../../../components/Dropdown'
import { getData } from '../../../utils/getData'

const CATEGORIES = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug']

const STATUSES = ['Suggestion', 'Planned', 'In-Progress', 'Live']

const EditFeedbackPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { productRequests } = getData()
  const feedback = productRequests.find((productRequest) => String(productRequest.id) === String(id))
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [detail, setDetail] = useState('')

  useEffect(() => {
    if (feedback) {
      setTitle(feedback.title)
      setCategory(feedback.category[0].toUpperCase() + feedback.category.slice(1,))
      setStatus(feedback.status[0].toUpperCase() + feedback.status.slice(1,))
      setDetail(feedback.description)
    }
  }, [id, feedback])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting form')
  }

  console.log(title)


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
            <Image src="/assets/shared/icon-plus.svg" alt="" width={16} height={16} />
          </button>

          <h2>Editing {title}</h2>

          <div className={styles.section}>
            <label htmlFor="title" className={styles.labelTitle}>Feedback Title</label><br />
            <label htmlFor="title" className={styles.labelDesc}>Add a short, descriptive headline</label><br />
            <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className={styles.section}>
            <label htmlFor="category" className={styles.labelTitle}>Category</label><br />
            <label htmlFor="category" className={styles.labelDesc}>Choose a cateogry for your feedback</label><br />

            <Dropdown options={CATEGORIES} />
          </div>

          <div className={styles.section}>
            <label htmlFor="category" className={styles.labelTitle}>Status</label><br />
            <label htmlFor="category" className={styles.labelDesc}>Choose a category for your feedback</label><br />

            <Dropdown options={STATUSES} />
          </div>

          <div className={styles.section}>
            <label htmlFor="detail" className={styles.labelTitle}>Feedback Detail</label><br />
            <label htmlFor="detail" className={styles.labelDesc}>Include any specific comments on what should be improved, added, etc.</label><br />
            <textarea name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
          </div>

          <div className={`${styles.actionButtons} ${styles.editButtons}`}>
            <div>
              <button className={styles.delete}>
                Delete
              </button>
            </div>

            <div className={styles.rightButtons}>
              <button className={styles.cancel}>
                Cancel
              </button>

              <button className={styles.add}>
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditFeedbackPage