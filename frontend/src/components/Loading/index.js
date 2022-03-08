import React from 'react';
import styles from './loading.module.css'

const Loading = () => {
  return (
    <>
      <img className={styles.loading_spinner} src='/images/spinner.svg' />
    </>
  )
}

export default Loading;