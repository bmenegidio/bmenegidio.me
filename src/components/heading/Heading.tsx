import clsx from 'clsx';

import { Props } from '@/components/heading/types/props';

export const Heading = ({ children, className, variant }: Props) => (
  <h1
    className={clsx('leading-tight', className, {
      'font-heading text-4xl font-bold': variant === 'title',
      'font-heading text-3xl font-bold': variant === 'subtitle',
      'font-body text-base': variant === 'body',
    })}
  >
    {children}
  </h1>
);
