import styles from '../modules/Button.module.css'
import { BsSearch } from "react-icons/bs"


function Button(){
  return(
      <button className={styles.button} type='submit'><BsSearch /></button>
  )
}

export default Button