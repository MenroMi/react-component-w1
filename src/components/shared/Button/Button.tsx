import { Component } from 'react';

import styles from './Button.module.css';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface IButtonStates {
  [x: string]: never;
}

class Button extends Component<IButtonProps, IButtonStates> {
  constructor(props: IButtonProps) {
    super(props);
  }

  render = (): React.ReactNode => {
    const { children, className, ...rest } = this.props;
    return (
      <button className={className || styles.button} {...rest}>
        {children}
      </button>
    );
  };
}

export default Button;
