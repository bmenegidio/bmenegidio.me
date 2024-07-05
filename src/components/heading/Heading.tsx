import clsx from 'clsx';

import { Props } from '@/components/heading/types/props';

export const Heading = ({ children, className, variant }: Props) => (
  <h1
    className={clsx('font-heading font-bold leading-tight', {
      'text-4xl': variant === 'title',
      'text-3xl': variant === 'subtitle',
      'text-base': variant === 'body',
    })}
  >
    {children}
  </h1>
);
