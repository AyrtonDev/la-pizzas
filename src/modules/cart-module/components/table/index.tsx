import type { PropsType } from '@/shared/types/props';

export const Table = ({ children }: PropsType) => {
  return (
    <div className="bg-light flex flex-col rounded-xl p-3 text-base font-semibold text-black">
      {children}
    </div>
  );
};
