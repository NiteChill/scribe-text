import styles from './ScribeText.module.scss'
import { useAnimate } from '../../hooks/useAnimate';

export default function ScribeText({msg, delay}) {
  const text = useAnimate(msg, delay);
  return (
    <p className={styles.text}>{text}</p>
  )
}