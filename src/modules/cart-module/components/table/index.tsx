import type { PropsType } from '@/shared/types/props';

export const Table = ({ children }: PropsType) => {
  return (
    <div className="bg-primary flex w-83 flex-col items-center rounded-2xl">
      <div className="flex h-12 items-center">
        <h2> Seu carrinho</h2>
      </div>
      <div className="bg-light my-2 flex flex-col rounded-xl p-2 text-base font-semibold text-black">
        {children}
      </div>
    </div>
  );
};
