import { Header } from '@/app/_components/header/Header';
import { Stack } from '@/app/_components/stack/Stack';
import { WhoIam } from '@/app/_components/who-iam/WhoIam';

export default function Home() {
  return (
    <div className={'w-screen'}>
      <main>
        <Header />
        <div className={'relative z-10'}>
          <WhoIam />
        </div>

        <Stack />
      </main>
    </div>
  );
}
