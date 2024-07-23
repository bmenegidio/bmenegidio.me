import { Heading } from '@/components/heading/Heading';

import { Tech } from '../data/techs';

export const TechCard = ({ techData }: { techData: Tech }) => (
  <section className="flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-gray-500 p-4 transition-transform hover:scale-105">
    <div className="h-[50px] w-[50px]">{<techData.icon />}</div>
    <Heading variant="body" className="font-extrabold">
      {techData.techName}
    </Heading>
    <Heading variant="body">{techData.description}</Heading>
  </section>
);
