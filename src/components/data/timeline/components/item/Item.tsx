import './style.css';

import { Props } from '@/components/data/timeline/components/item/types/props';

export const TimelineItem = ({ children }: Props) => (
  <div className="flex gap-16">
    <div className="relative -mt-2">
      <div className="h-full w-1 rounded-full bg-white"></div>
      <div className="bg-primary absolute top-3 h-16 w-16 -translate-x-1/2 transform rounded-full border-4 border-gray-200"></div>
    </div>
    <div className="max-w-lg">
      <div className="balloon">
        <div className="py-2.5">{children}</div>
      </div>
    </div>
  </div>
);
