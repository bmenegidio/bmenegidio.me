import { Heading } from '@/components/heading/Heading';
import { GithubBlackIcon } from '@/components/icons/github-black/GithubBlack';
import { NextJsIcon } from '@/components/icons/next-js/NextJs';
import { ReactIcon } from '@/components/icons/react/React';
import { TailwindIcon } from '@/components/icons/tailwind/Tailwind';
import { TypescriptIcon } from '@/components/icons/typescript/Typescript';
import { Content } from '@/components/surface/content/Content';

export const ChosenTechnologies = () => {
  const techs = [
    {
      icon: <TypescriptIcon />,
      techName: 'TypeScript',
      description:
        'O TypeScript adiciona tipagem estática ao JavaScript. Escolhi TypeScript para melhorar a robustez e a manutenibilidade do código, proporcionando maior segurança contra erros e melhorando a produtividade com autocompletar e verificação de tipos.',
    },
    {
      icon: <ReactIcon />,
      techName: 'React.js',
      description:
        'É uma biblioteca JavaScript para construção de interfaces de usuário. Utilizei React.js para criar componentes reutilizáveis e proporcionar uma experiência de usuário dinâmica e eficiente.',
    },
    {
      icon: <NextJsIcon />,
      techName: 'Next.js',
      description:
        'É um framework React para aplicações web estáticas e renderização do lado do servidor. Escolhi Next.js para melhorar o desempenho do site, facilitando a geração de páginas estáticas e a otimização de SEO.',
    },
    {
      icon: <TailwindIcon />,
      techName: 'Tailwind CSS',
      description:
        'É um framework CSS utilitário que permite a construção rápida e eficiente de designs personalizados. Optei por Tailwind CSS para ter um controle preciso sobre o estilo dos componentes e acelerar o desenvolvimento com suas classes utilitárias prontas para uso.',
    },
    {
      icon: <GithubBlackIcon />,
      techName: 'Github & Github Pages',
      description:
        'Uma plataforma de hospedagem de código-fonte e controle de versão, enquanto o Github Pages oferece hospedagem gratuita para sites estáticos. Utilizei Github para versionamento do código e colaboração, e Github Pages para hospedar o site de forma gratuita e confiável.',
    },
  ];

  return (
    <section className="bg-white text-black">
      <Content className="py-10">
        <Heading variant={'subtitle'} className={'text-black'}>
          🔨 Tecnologias
        </Heading>

        <Heading variant="body" className="mt-3">
          Segue abaixo as tecnologias que escolhi para desenvolver o meu site 🙃
        </Heading>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techs.map((techObj) => (
            <section
              key={techObj.techName}
              className="flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-gray-500 p-4 transition-transform hover:scale-105"
            >
              <div className="h-[50px] w-[50px]">{techObj.icon}</div>
              <Heading variant="body" className="font-extrabold">
                {techObj.techName}
              </Heading>
              <Heading variant="body">{techObj.description}</Heading>
            </section>
          ))}
        </div>
      </Content>
    </section>
  );
};
