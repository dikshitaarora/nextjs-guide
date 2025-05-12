// ✍️ import the button's CSS module
import styles from './button.module.css'

const Button = () => {
  // ✍️ set the button's className to the class from the CSS module
  return (
    <button type="button" className={styles.error}>
      Log in
    </button>
  )
}

export default Button
