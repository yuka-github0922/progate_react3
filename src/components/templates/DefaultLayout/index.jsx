import styles from './index.module.css'

export const DefaultLayout = (props) => {
  return (
    <div>
      <div className={styles.header}>
        {props.header}
      </div>
      <div className={styles.contents}>
        {props.contents}
      </div>
      <div className={styles.footer}>
        {props.footer}
      </div>
    </div>
  )
}
