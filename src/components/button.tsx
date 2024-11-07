import styles from "./button.module.css";

interface ButtonsProps {
  value: number | string;
}

export default function Button({ value }: ButtonsProps) {
  return <button className={styles.button}>{value}</button>;
}
