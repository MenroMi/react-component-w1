import { Box, Overlay } from '../shared';
import { GearLoaderIcon } from '../Icons';

interface ILoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  [x: string]: unknown;
}

const Loader = ({ className, ...props }: ILoaderProps) => {
  return (
    <Box className={className} {...props}>
      <Overlay>
        <GearLoaderIcon />
      </Overlay>
    </Box>
  );
};

export default Loader;
