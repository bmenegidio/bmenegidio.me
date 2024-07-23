import { Heading } from '@/components/heading/Heading';
import { Content } from '@/components/surface/content/Content';

import { techs } from './data/techs';
import { TechCard } from './tech-card/TechCard';

export const ChosenTechnologies = () => {
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
          {techs.map((techData) => (
            <TechCard key={techData.techName} techData={techData} />
          ))}
        </div>
      </Content>
    </section>
  );
};
