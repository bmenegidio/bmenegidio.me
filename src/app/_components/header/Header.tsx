import { Avatar } from '@/app/_components/header/avatar/Avatar';
import { MacOsWindowContent } from '@/app/_components/header/macos-window-content/MacOsWindowContent';
import { Heading } from '@/components/heading/Heading';
import { Content } from '@/components/surface/content/Content';
import { MacOSWindow } from '@/components/widgets/macos-window/MacOSWindow';

export const Header = () => (
  <header
    className="relative flex flex-col gap-20 bg-cover bg-center p-5 pt-20 mask-gradient-to-top"
    style={{ backgroundImage: 'url(./space.png)' }}
  >
    <Content>
      <div className={'flex flex-col gap-2'}>
        <Avatar src={'./avatar.jpeg'} />

        <div className="max-w-[550px]">
          <Heading variant={'title'}>Bruno Menegidio</Heading>
          <Heading variant={'title'}>Software Engineer 🧑🏻‍💻❤️</Heading>
          <MacOSWindow className={'my-10'}>
            <MacOsWindowContent />
          </MacOSWindow>
        </div>
      </div>
    </Content>
  </header>
);
