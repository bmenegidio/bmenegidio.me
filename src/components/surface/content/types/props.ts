import { PropsWithChildren } from 'react';

export type Props = Pick<React.ComponentProps<'div'>, 'className'> & PropsWithChildren;
