import { Props } from '@/app/_components/stack/stack-icon/types/props';

const StackIconContainer = ({ children }: Props) => (
  <div className={'grid grid-cols-2 justify-items-center gap-7 md:grid-cols-3'}>{children}</div>
);

export const StackIconItem = ({ children }: Props) => <div className={'w-20'}>{children}</div>;

export const StackIcon = {
  Container: StackIconContainer,
  Icon: StackIconItem,
};
