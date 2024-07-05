import './stack.css';

import { StackIcon } from '@/app/_components/stack/stack-icon';
import { Heading } from '@/components/heading/Heading';
import { AngularIcon } from '@/components/icons/angular/Angular';
import { JavascriptIcon } from '@/components/icons/javascript/Javascript';
import { MongodbIcon } from '@/components/icons/mongodb/Mongodb';
import { NestJsIcon } from '@/components/icons/nest-js/NestJs';
import { NextJsIcon } from '@/components/icons/next-js/NextJs';
import { NodeJsIcon } from '@/components/icons/node-js/NodeJs';
import { ReactIcon } from '@/components/icons/react/React';
import { RedisIcon } from '@/components/icons/redis/Redis';
import { TypescriptIcon } from '@/components/icons/typescript/Typescript';
import { Content } from '@/components/surface/content/Content';

export const Stack = () => (
  <section className={'relative -mt-10 bg-white'}>
    <Content className={'flex flex-col items-center gap-8 py-20'}>
      <Heading variant={'subtitle'} className={'text-black'}>
        Minha Stack Favorita ❤️
      </Heading>

      <StackIcon.Container>
        <StackIcon.Icon>
          <JavascriptIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <TypescriptIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <ReactIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <NextJsIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <AngularIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <NodeJsIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <NestJsIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <MongodbIcon />
        </StackIcon.Icon>
        <StackIcon.Icon>
          <RedisIcon />
        </StackIcon.Icon>
      </StackIcon.Container>
    </Content>
  </section>
);
