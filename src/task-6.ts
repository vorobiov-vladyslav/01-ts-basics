export function getFirstElement<T>(array: T[]): T {
  return array[0];
}

export const firstNumber = getFirstElement<number>([1, 2, 3]);
export const firstString = getFirstElement<string>(['Alice', 'Bob']);
export const firstBoolean = getFirstElement<boolean>([true, false]);

console.log(firstNumber, firstString, firstBoolean);

// TypeScript rejects a string in an explicitly numeric array:
// getFirstElement<number>([1, 2, '3']);
