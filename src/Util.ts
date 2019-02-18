
export function sample<T>(arr: T[]): T {
  if (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  } else {
    // tslint:disable-next-line:no-console
    console.warn("Tried to sample, but given non-array: ", { arr });
  }
}
