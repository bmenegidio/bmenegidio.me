import clsx from 'clsx';

import { MacOSWindowProps } from '@/components/widgets/macos-window/types/props';

export const MacOSWindow = ({ children, className }: MacOSWindowProps) => (
  <div className={clsx('overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md', className)}>
    <div className="flex items-center border-b border-gray-200 px-4 py-2">
      <div className="flex space-x-1">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
      </div>
    </div>
    <div className={'bg-dracula-background font-code p-5'}>{children}</div>
  </div>
);
