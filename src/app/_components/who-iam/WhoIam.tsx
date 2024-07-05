import { BackgroundOrbitImage } from '@/app/_components/who-iam/background-orbit-image/BackgroundOrbitImage';
import { Heading } from '@/components/heading/Heading';
import { GithubIcon } from '@/components/icons/github/Github';
import { LinkedinIcon } from '@/components/icons/linkedin/Linkedin';
import { Content } from '@/components/surface/content/Content';
import { SocialNetwork } from '@/components/widgets/social-network/SocialNetwork';

export const WhoIam = () => (
  <section>
    <Content className={'flex items-center justify-center'}>
      <div className={'bg-foreground -mt-5 rounded-3xl border-2 border-dashed border-gray-500 md:max-w-[550px]'}>
        <div className={'relative min-h-[300px] overflow-hidden p-10'}>
          <Heading variant={'body'}>
            Eu me chamo Bruno Menegidio, sou desenvolvedor web. Com uma paixão por inovação e desempenho, estou sempre
            em busca de novas maneiras de melhorar a experiência do usuário e otimizar o desenvolvimento de aplicações
            web.
          </Heading>
          <Heading variant={'body'} className={'mt-1'}>
            Seja bem-vindo ao meu espaço online!
          </Heading>

          <div className={'z-10 mt-5'}>
            <Heading variant={'subtitle'}>Me siga nas redes</Heading>
            <div className={'mt-3 flex gap-5'}>
              <SocialNetwork href={'https://github.com/bmenegidio'}>
                <GithubIcon />
              </SocialNetwork>
              <SocialNetwork href={'https://www.linkedin.com/in/bruno-menegidio-da-silva-6a2aa4122/'}>
                <LinkedinIcon />
              </SocialNetwork>
            </div>
          </div>

          <div className={'pointer-events-none select-none'}>
            <BackgroundOrbitImage className={'-right-20 -top-20'} />
            <BackgroundOrbitImage className={'-bottom-24 -left-28'} />
          </div>
        </div>
      </div>
    </Content>
  </section>
);
