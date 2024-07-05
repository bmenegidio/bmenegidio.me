import clsx from 'clsx';

import { Props } from '@/components/heading/types/props';

export const Heading = ({ children, className, variant }: Props) => (
  <h1
    className={clsx('font-bold leading-tight', className, {
      'font-heading text-4xl': variant === 'title',
      'font-heading text-3xl': variant === 'subtitle',
      'font-body text-base font-normal leading-5': variant === 'body',
    })}
  >
    {children}
  </h1>
);
