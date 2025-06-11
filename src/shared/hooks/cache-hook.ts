import type { CacheType } from '../types/cache';

export const useCache = (): CacheType => {
  const set = (key: string, value: any) => {
    const json = JSON.stringify(value);

    localStorage.setItem(key, json);

    return;
  };

  const get = (key: string) => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  };

  const remove = (key: string) => {
    localStorage.removeItem(key);

    return;
  };

  return {
    get,
    set,
    remove,
  };
};
