import styles from './Box.module.css';

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Box = ({ children, className, ...rest }: IBoxProps) => {
  return (
    <div className={styles.box + ` ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
