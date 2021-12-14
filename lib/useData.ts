const cache: { [key: string]: any } = {};

export default function useData(key: string, fetcher: Function) {
  if (!cache[key]) {
    let data: any;
    let promise: any;
    cache[key] = () => {
      if (data !== undefined) return data;
      if (!promise) promise = fetcher().then((r: any) => (data = r));
      throw promise;
    };
  }
  return cache[key]();
}
