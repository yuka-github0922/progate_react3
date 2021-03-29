import styles from './index.module.css'

export const AppButton = (props) => {
  return <button className={styles.button}>{props.children}</button>
}
