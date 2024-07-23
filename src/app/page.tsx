'use client';

import { ChosenTechnologies } from '@/app/_components/chosen-technologies/ChosenTechnologies';
import { Experience } from '@/app/_components/experience/Experience';
import { Footer } from '@/app/_components/footer/Footer';
import { Header } from '@/app/_components/header/Header';
import { Stack } from '@/app/_components/stack/Stack';
import { WhoIam } from '@/app/_components/who-iam/WhoIam';
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible/FadeInWhenVisible';

export default function Home() {
  return (
    <main>
      <Header />

      <FadeInWhenVisible className={'relative z-10'}>
        <WhoIam />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Stack />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Experience />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ChosenTechnologies />
      </FadeInWhenVisible>

      <Footer />
    </main>
  );
}
