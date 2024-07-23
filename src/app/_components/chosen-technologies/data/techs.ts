import { GithubBlackIcon } from '@/components/icons/github-black/GithubBlack';
import { NextJsIcon } from '@/components/icons/next-js/NextJs';
import { ReactIcon } from '@/components/icons/react/React';
import { TailwindIcon } from '@/components/icons/tailwind/Tailwind';
import { TypescriptIcon } from '@/components/icons/typescript/Typescript';

export type Tech = {
  icon: () => React.JSX.Element;
  techName: string;
  description: string;
};

export const techs: Tech[] = [
  {
    icon: TypescriptIcon,
    techName: 'TypeScript',
    description:
      'O TypeScript adiciona tipagem estática ao JavaScript. Escolhi TypeScript para melhorar a robustez e a manutenibilidade do código, proporcionando maior segurança contra erros e melhorando a produtividade com autocompletar e verificação de tipos.',
  },
  {
    icon: ReactIcon,
    techName: 'React.js',
    description:
      'É uma biblioteca JavaScript para construção de interfaces de usuário. Utilizei React.js para criar componentes reutilizáveis e proporcionar uma experiência de usuário dinâmica e eficiente.',
  },
  {
    icon: NextJsIcon,
    techName: 'Next.js',
    description:
      'É um framework React para aplicações web estáticas e renderização do lado do servidor. Escolhi Next.js para melhorar o desempenho do site, facilitando a geração de páginas estáticas e a otimização de SEO.',
  },
  {
    icon: TailwindIcon,
    techName: 'Tailwind CSS',
    description:
      'É um framework CSS utilitário que permite a construção rápida e eficiente de designs personalizados. Optei por Tailwind CSS para ter um controle preciso sobre o estilo dos componentes e acelerar o desenvolvimento com suas classes utilitárias prontas para uso.',
  },
  {
    icon: GithubBlackIcon,
    techName: 'Github & Github Pages',
    description:
      'Uma plataforma de hospedagem de código-fonte e controle de versão, enquanto o Github Pages oferece hospedagem gratuita para sites estáticos. Utilizei Github para versionamento do código e colaboração, e Github Pages para hospedar o site de forma gratuita e confiável.',
  },
];
