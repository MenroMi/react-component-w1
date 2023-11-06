interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Section = ({ children, ...props }: ISectionProps) => {
  return <section {...props}>{children}</section>;
};

export default Section;
