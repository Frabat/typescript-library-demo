import { Triplet } from '../types/types';
export function threeNumberSum(
  array: number[],
  targetSum: number
): readonly Triplet[] {
  // Write your code here.
  array.sort((a: number, b: number) => a - b);

  const results: readonly Triplet[] = [];

  // eslint-disable-next-line functional/no-loop-statement
  for (
    // eslint-disable-next-line functional/no-let
    let currentNumber = 0;
    currentNumber < array.length - 2;
    currentNumber++
  ) {
    // eslint-disable-next-line functional/no-let
    let leftPointer: number = currentNumber + 1;
    // eslint-disable-next-line functional/no-let
    let rightPointer: number = array.length - 1;
    // eslint-disable-next-line functional/no-loop-statement
    while (leftPointer < rightPointer) {
      const currentSum =
        array[currentNumber] + array[leftPointer] + array[rightPointer];
      if (currentSum > targetSum) {
        rightPointer--;
      } else if (currentSum < targetSum) {
        leftPointer++;
      } else {
        results.push([
          array[currentNumber],
          array[leftPointer],
          array[rightPointer],
        ]);
        leftPointer++;
        rightPointer--;
      }
    }
  }

  return results;
}
