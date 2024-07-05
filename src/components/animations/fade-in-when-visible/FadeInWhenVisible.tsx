'use client';

import clsx from 'clsx';

import { Props } from '@/components/animations/fade-in-when-visible/types/props';
import { useIntersectionObserverApi } from '@/hooks/useIntersectionObserverApi';

export function FadeInWhenVisible({ children, className }: Props) {
  const [ref, isVisible] = useIntersectionObserverApi({ threshold: 0.1 });

  return (
    <div ref={ref} className={clsx(`${isVisible ? 'animate-fade-in' : 'opacity-0'}`, className)}>
      {children}
    </div>
  );
}
