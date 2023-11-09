import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.262962 0L5.13148 5L10 0' stroke='#050038' strokeWidth={1.5} />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
