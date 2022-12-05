# Advent of Code JavaScript Template

This repository is a minimal template for Advent of Code, intended for JavaScript solutions.

## Prerequisites

* Install Node.js: https://nodejs.org/en/
* Choose a code editor
  * If you're not sure, use VSCode: https://code.visualstudio.com/
* Choose a terminal emulator
  * If you're not sure, you can use the one built into VSCode: https://code.visualstudio.com/docs/terminal/basics

## Daily setup

For each day, perform the following steps:

* Create a new directory for that day
* Copy `main.js` into that directory
* Create a text file called `input.txt` in that same directory, and paste the example input into it.

And that's it!

## Writing your solution

Each `main.js` file includes code to load the inputs into a variable called `inputs`. This variable is an array, where each entry is one line of input. Each entry will start as a string, so remember to parse the input first if you want to use it as a number.

Write your solution below the comment saying "// put solution below this line".

You can print the solution using `console.log`.

## Testing your solution:

To test your solution:
* Open a terminal in the current day's directory
* Run `node main.js`

To test with different inputs, update the `input.txt` file.

Once you think you have the solution, replace the example input with the real puzzle input (available at the bottom of the puzzle description), and run your solution again to get the answer.

## Example

There is an example of a daily solution in the `example` directory.
