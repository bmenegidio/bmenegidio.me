import clsx from 'clsx';
import Image from 'next/image';

import { Props } from '@/app/_components/header/avatar/types/props';

export const Avatar = ({ src, className }: Props) => (
  <Image
    src={src}
    alt={'Profile'}
    className={clsx('rounded-full ring-2 ring-gray-400', className)}
    width={75}
    height={75}
  />
);
