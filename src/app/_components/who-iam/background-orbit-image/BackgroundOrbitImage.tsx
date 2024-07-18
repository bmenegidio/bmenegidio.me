import clsx from 'clsx';
import Image from 'next/image';

import { Props } from '@/app/_components/who-iam/background-orbit-image/types/props';

export const BackgroundOrbitImage = ({ className }: Props) => (
  <Image
    alt="orbital-animation"
    width="250"
    height="250"
    src="./orbital-shape.svg"
    className={clsx('absolute z-0 animate-rotate-keyframes', className)}
  />
);
