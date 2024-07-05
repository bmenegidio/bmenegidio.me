import Link from 'next/link';

import { Props } from '@/components/widgets/social-network/types/props';

export const SocialNetwork = ({ children, href }: Props) => (
  <Link href={href}>
    <div className={'w-8 transform-gpu transition duration-300 ease-in-out hover:scale-125 hover:opacity-75'}>
      {children}
    </div>
  </Link>
);
