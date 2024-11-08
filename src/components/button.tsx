import styles from "./button.module.css";

interface ButtonsProps {
  value: number | string;
  handleClick: () => void;
}

export default function Button({ value, handleClick }: ButtonsProps) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {value}
    </button>
  );
}
