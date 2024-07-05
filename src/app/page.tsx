import { Header } from '@/app/_components/header/Header';
import { WhoIam } from '@/app/_components/who-iam/WhoIam';

export default function Home() {
  return (
    <div className={'w-screen'}>
      <main>
        <Header />
        <WhoIam />
      </main>
    </div>
  );
}
