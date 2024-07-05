import clsx from 'clsx';

import { Props } from '@/components/surface/content/types/props';

export const Content = ({ children, className }: Props) => (
  <div className={clsx('container mx-auto px-4', className)}>{children}</div>
);
