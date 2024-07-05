'use client';

import { Header } from '@/app/_components/header/Header';
import { Stack } from '@/app/_components/stack/Stack';
import { WhoIam } from '@/app/_components/who-iam/WhoIam';
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible/FadeInWhenVisible';

export default function Home() {
  return (
    <div className={'w-screen'}>
      <main>
        <FadeInWhenVisible>
          <Header />
        </FadeInWhenVisible>

        <FadeInWhenVisible className={'relative z-10'}>
          <WhoIam />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Stack />
        </FadeInWhenVisible>
      </main>
    </div>
  );
}
