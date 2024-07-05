import { Avatar } from '@/app/_components/header/avatar/Avatar';
import { MacOsWindowContent } from '@/app/_components/header/macos-window-content/MacOsWindowContent';
import { Heading } from '@/components/heading/Heading';
import { Content } from '@/components/surface/content/Content';
import { MacOSWindow } from '@/components/widgets/macos-window/MacOSWindow';

export const Header = () => (
  <header
    className="mask-gradient-to-top relative flex flex-col gap-20 bg-cover bg-center p-5 pt-20"
    style={{ backgroundImage: 'url(/space.png)' }}
  >
    <Content>
      <div className={'flex flex-col gap-2'}>
        <Avatar
          src={
            'https://media.licdn.com/dms/image/D4D03AQHo5M4KFuAUXA/profile-displayphoto-shrink_400_400/0/1690417943208?e=1725494400&v=beta&t=Sq5gUiByaBkIFkiUY6QeKzUVoo1H_Y5wAYDJL8ObTDk'
          }
        />

        <div className="max-w-[550px]">
          <Heading variant={'title'}>Desenvolvedor Web 🧑🏻‍💻❤️, entusiasta de Clean Code e Clean Architecture.</Heading>
          <MacOSWindow className={'my-10'}>
            <MacOsWindowContent />
          </MacOSWindow>
        </div>
      </div>
    </Content>
  </header>
);
