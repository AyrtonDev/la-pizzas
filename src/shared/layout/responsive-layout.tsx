import { type PropsType } from '../types/props';

export const ResponsiveLayout = ({ children }: PropsType) => (
  <div className="min-h-screen w-screen">
    <div className="flex h-full w-full px-2 sm:max-w-7xl sm:px-0">{children}</div>
  </div>
);
