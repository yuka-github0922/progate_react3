import styles from './index.module.css'

export const MainTitle = (props) => {
  return <h1 className={`${styles.mainTitle} ${props.className}`}>{props.children}</h1>
}
