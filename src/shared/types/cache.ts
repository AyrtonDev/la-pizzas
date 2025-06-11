export type CacheType = {
  get: (key: string) => any | null;
  set: (key: string, value: any) => void;
  remove: (key: string) => void;
};
