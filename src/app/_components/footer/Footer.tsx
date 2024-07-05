import { Heading } from '@/components/heading/Heading';
import { Content } from '@/components/surface/content/Content';

export const Footer = () => (
  <footer>
    <Content>
      <div className={'p-10'}>
        <Heading variant={'body'}>
          Made with ❤️ by <strong>Bruno Menegidio</strong>
        </Heading>
        <Heading variant={'body'}>
          &copy;{` `} {new Date().getFullYear()} Todos os direitos reservados.
        </Heading>
      </div>
    </Content>
  </footer>
);
