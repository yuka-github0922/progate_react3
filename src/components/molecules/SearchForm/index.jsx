import styles from './index.module.css'
import {SearchInput} from '../../atoms/SearchInput'
import {AppButton} from '../../atoms/AppButton'

export const SearchForm = (props) => {
  return(
    <div className={styles.searchForm}>
      <SearchInput />
      <AppButton>submit</AppButton>
    </div>
  )
}
