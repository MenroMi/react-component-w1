import styles from './Button.module.css';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, className, type, ...rest }: IButtonProps) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ` + className}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
