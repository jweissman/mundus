export function sampleOnce<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sampleN<T>(arr: T[], n: number): T[] {
  const picks = [];
  let i = 0;
  while (i < n) { i++; picks.push(sampleOnce(arr)); }
  return picks;
}

export function sample<T>(arr: T[], n = 1): T | T[] {
  if (arr) {
    if (n === 1) {
      return sampleOnce(arr);
    } else if (n > 1) {
      return sampleN(arr, n);
    }
  } else {
    // tslint:disable-next-line:no-console
    console.warn("Tried to sample, but given non-array: ", { arr });
  }
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
