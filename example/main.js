const fs = require('fs')
const { join } = require('path')

const file = fs.readFileSync(join(__dirname, './input.txt'), 'utf8')
const inputs = file.split('\n')

// put solution below this line

// This example is from Advent of Code 2021
// The problem description is here: https://adventofcode.com/2021/day/1

let previousDepth
let increases = 0
for (const input of inputs) {
  // Convert the input to a number
  const depth = Number(input)

  // Check to see whether the current depth is greater than the previous depth.
  // Skip this check if `previousDepth` is `undefined` because it means this is
  // the first input, so there is no `previousDepth` to compare with.
  if (previousDepth !== undefined && depth > previousDepth) {
    increases += 1
  }

  // Set the current depth as the previous depth, for the next loop.
  previousDepth = depth
}

console.log(increases)
