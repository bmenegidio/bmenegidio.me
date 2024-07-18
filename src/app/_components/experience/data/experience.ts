import { AngularIcon } from '@/components/icons/angular/Angular';
import { JavascriptIcon } from '@/components/icons/javascript/Javascript';
import { MongodbIcon } from '@/components/icons/mongodb/Mongodb';
import { NestJsIcon } from '@/components/icons/nest-js/NestJs';
import { NodeJsIcon } from '@/components/icons/node-js/NodeJs';
import { OracleIcon } from '@/components/icons/oracle/Oracle';
import { PhpIcon } from '@/components/icons/php/Php';
import { ReactIcon } from '@/components/icons/react/React';
import { RedisIcon } from '@/components/icons/redis/Redis';
import { TypescriptIcon } from '@/components/icons/typescript/Typescript';

const availableTechs = {
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  angular: AngularIcon,
  react: ReactIcon,
  mongoDB: MongodbIcon,
  nodeJS: NodeJsIcon,
  nestJS: NestJsIcon,
  redis: RedisIcon,
  php: PhpIcon,
  oracle: OracleIcon,
};

export const experiencesData = [
  {
    id: 1,
    role: 'Full Stack Software Engineer',
    content: `Desenvolvimento e implantação de integrações entre plataformas (ERP's e Marketplaces).
                    Desenvolvimento de recursos como integração de dados básicos do cadastro de produtos,
                    enriquecimento/ preparação de dados para publicação nos marketplaces, análise de precificação,
                    parametrização e análise de empresas/filiais para sincronização de dados, gerenciamento de anúncios,
                    gerenciamento do fluxo de pedidos dos marketplaces, entre outros. Integrações realizadas com grandes
                    plataformas como Anymarket, B2W, Magazine Luiza, Mercado Livre, Shopee, Linx DMS, entre outras.
                    Desenvolvimento de rotinas e recursos internos da API e Frontend utilizando NodeJS, AngularJS e
                    MongoDB.`,
    period: 'Abr 2022 - Jul 2023',
    techsIcons: [
      availableTechs['javascript'],
      availableTechs['angular'],
      availableTechs['react'],
      availableTechs['mongoDB'],
      availableTechs['nodeJS'],
    ],
  },
  {
    id: 2,
    role: 'Front End Software Engineer',
    content: `Participação ativa no desenvolvimento do projeto Condhouse - Gestão e Automação de Condomínios.
                    Desenvolvimento de recursos como mural, chamadas de voz, chat, entregas, visitantes, abertura de
                    portas e portões, cadastro completo com informações de moradores, gestão de entregas de produtos e
                    correspondências registradas, entre outros. Desenvolvimento frontend da plataforma WEB utilizando
                    Angular e desenvolvimento dos APP's do Morador e Visitante (Versão iOS e Android) utilizando Ionic
                    Framework.`,
    period: 'Jan 2021 - Mar 2022',
    techsIcons: [
      availableTechs['typescript'],
      availableTechs['angular'],
      availableTechs['react'],
      availableTechs['nodeJS'],
    ],
  },
  {
    id: 3,
    role: 'Full Stack Software Engineer',
    content: `Atuação no desenvolvimento de soluções para gestão de bares e restaurantes, utilizando tecnologias
como React Native, Angular, React, NestJS e MySQL. Desenvolvimento de recursos como Garçom
Digital, APP Delivery e Sistema Web para administração da plataforma e gestão dos bares/restaurantes.`,
    period: 'Out 2019 - Dez 2020',
    techsIcons: [
      availableTechs['typescript'],
      availableTechs['angular'],
      availableTechs['react'],
      availableTechs['mongoDB'],
      availableTechs['nodeJS'],
      availableTechs['nestJS'],
      availableTechs['redis'],
    ],
  },
  {
    id: 4,
    role: 'Full Stack Software Engineer',
    content: `Desenvolvimento de soluções acadêmicas utilizando PHP, HTML, JQuery, JavaScript e Oracle, incluindo
o Portal do Aluno, Portal do Professor, Site Institucional e Sistema de Avaliação.`,
    period: 'Dez 2017 - Set 2019',
    techsIcons: [
      availableTechs['typescript'],
      availableTechs['javascript'],
      availableTechs['angular'],
      availableTechs['nodeJS'],
      availableTechs['php'],
      availableTechs['oracle'],
    ],
  },
  {
    id: 5,
    role: 'Full Stack Software Engineer',
    content: `Desenvolvimento de aplicações internas e externas utilizando tecnologias como Angular, React Native,
NestJS e PostgreSQL. Desenvolvimento do APP "Baixo Guandu Conectado" para iOS e Android
utilizando React Native, que oferece informações sobre a cidade, equipe de governo, notícias,
eventos e um canal de comunicação para os cidadãos.`,
    period: 'Fev 2013 - Ago 2019',
    techsIcons: [
      availableTechs['php'],
      availableTechs['typescript'],
      availableTechs['angular'],
      availableTechs['react'],
      availableTechs['mongoDB'],
      availableTechs['nodeJS'],
      availableTechs['nestJS'],
      availableTechs['redis'],
    ],
  },
];
