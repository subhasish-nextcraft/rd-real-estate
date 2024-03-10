'use client';

import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function TopWrapper({ children }: Props) {
  return <div>{children}</div>;
}
