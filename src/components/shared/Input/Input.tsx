import React from 'react';

import styles from './Input.module.css';

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
  required?: boolean;
}

const Input = ({ children, className, type, ...props }: IInputProps) => {
  return (
    <input
      type={type || 'text'}
      className={`${styles.input} ` + className}
      {...props}
    >
      {children}
    </input>
  );
};

export default Input;
