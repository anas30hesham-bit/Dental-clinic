import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'scale';
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}

/**
 * Wrapper that fades/slides its children into view on scroll.
 */
export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal();
  const base = variant === 'scale' ? 'reveal-scale' : 'reveal';
  return (
    <Tag
      ref={ref as never}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
