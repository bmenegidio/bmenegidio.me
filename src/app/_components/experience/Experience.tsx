import { experiencesData } from '@/app/_components/experience/data/experience';
import { Timeline } from '@/components/data/timeline/Timeline';
import { Heading } from '@/components/heading/Heading';
import { Content } from '@/components/surface/content/Content';

export const Experience = () => (
  <section className={'bg-foreground'}>
    <Content className={'p-10'}>
      <Heading variant={'subtitle'}>Experiência Profissional</Heading>

      <div className={'my-10 ml-10'}>
        {experiencesData.map((item) => (
          <Timeline.Item key={item.id}>
            <div className={'flex flex-col gap-8'}>
              <div className="flex flex-col gap-2.5">
                <Heading variant={'subtitle'}>{item.role}</Heading>
                <Heading variant={'body'}>{item.period}</Heading>
              </div>
              <Heading variant={'body'}>{item.content}</Heading>

              <hr className="h-0.5 w-full rounded border-0 bg-black" />
              <div className={'flex flex-wrap justify-center gap-4'}>
                {item.techsIcons?.map((Icon, index) => (
                  <div key={index} className={'w-10'}>
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </Timeline.Item>
        ))}
      </div>
    </Content>
  </section>
);
