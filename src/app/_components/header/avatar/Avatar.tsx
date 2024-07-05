import Image from 'next/image';

import { Props } from '@/app/_components/header/avatar/types/props';

export const Avatar = ({ src }: Props) => (
  <Image src={src} alt={'Profile'} className={'rounded-full ring-2 ring-gray-400'} width={75} height={75} />
);
