function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6]; //Corrected type to number[]

const combined: number[] = combineArrays(arr1, arr2); 