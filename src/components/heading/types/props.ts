import { ComponentProps, PropsWithChildren } from 'react';

export type Props = Pick<ComponentProps<'h1'>, 'className'> &
  PropsWithChildren & {
    variant: 'title' | 'subtitle' | 'body' | 'caption';
  };
