import { ReactElement } from 'react';

export type MacOSWindowProps = Pick<React.ComponentProps<'div'>, 'className'> & {
  children: ReactElement;
};
