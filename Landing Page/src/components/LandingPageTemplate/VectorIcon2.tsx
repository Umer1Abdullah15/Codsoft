import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.502129 0L5.27389 5L10.0456 0' stroke='#050038' strokeWidth={1.5} />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
