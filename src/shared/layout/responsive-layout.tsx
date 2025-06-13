import { type PropsType } from '../types/props';

export const ResponsiveLayout = ({ children }: PropsType) => (
  <div className="flex h-full min-h-screen w-full min-w-screen justify-center">
    <div className="flex h-full w-full flex-col px-2 sm:max-w-7xl sm:px-0">{children}</div>
  </div>
);
