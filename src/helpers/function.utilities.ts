interface Callback<Params extends unknown[]> {
  (...args: Params): void;
}

export function callAll<Params extends unknown[]>(
  ...fns: Array<Callback<Params> | undefined>
) {
  return (...args: Params) =>
    fns.forEach((fn) => typeof fn === 'function' && fn(...args));
}
