/**
 * The program is for 303
 *
 * By: Michael Zagon
 * Version: 1.0
 * Since:   2024-05-01
 */

import { createPrompt } from 'bun-promptx'

/**
* binarySearch function
 */
function binarySearch(
  arr: number[],
  tar: number,
  lowIndex: number,
  highIndex: number
): number {
  if (lowIndex > highIndex) {
    return -1
  }

  // Find the middle index
  const middle = Math.floor((lowIndex + highIndex) / 2)

  if (arr[middle] === tar) {
    return middle
  }

  if (arr[middle] > tar) {
    return binarySearch(arr, tar, lowIndex, middle - 1)
  } else {
    return binarySearch(arr, tar, middle + 1, highIndex)
  }
}

// The variables
const min = 1
const max = 999
const arraySize = 250

// The array size
const numArray = new Array(arraySize)

// Getting the random numbers for the array
for (let counter = 0; counter < numArray.length; counter++) {
  numArray[counter] = Math.floor(Math.random() * max + min)
}

// sorting the array
numArray.sort(function (a, b) {
  return a - b
})

// Asks for the users input
console.log('\nBinary Search Program')
console.log('Sorted List of numbers: ')

// the elements in the array.
// https://stackoverflow.com/questions/56262258/how-to-print-array-elements
for (let counter = 0; counter < numArray.length; counter++) {
  process.stdout.write(`${String(numArray[counter])},`)
}

// asks for the user input
console.log('')
console.log('')
const userInput = Number(
  prompt('Enter a number in array (Between 0 and 999): ')
)

// What index it is in
console.log(
  `Your number is in the ${binarySearch(numArray, userInput, 0, arraySize - 1)}`
)
console.log('\nDone.')
