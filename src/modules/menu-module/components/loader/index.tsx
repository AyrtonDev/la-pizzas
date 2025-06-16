import { LoaderCircle } from 'lucide-react';

export const Loader = () => {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <LoaderCircle size="100" className="text-primary animate-spin" />
    </div>
  );
};
