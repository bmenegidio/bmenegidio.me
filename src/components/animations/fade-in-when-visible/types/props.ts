import { ComponentProps, PropsWithChildren } from 'react';

export type Props = PropsWithChildren & Pick<ComponentProps<'div'>, 'className'>;
