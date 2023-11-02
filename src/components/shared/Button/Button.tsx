import styles from './Button.module.css';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...rest }: IButtonProps) => {
  return (
    <button className={className || styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
