// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in 12 hour format
// Returns

// string: the time in 24 hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const date = s.replace(/PM|AM/g, '').split(':')

  const hours = parseInt(date[0])
  const minutes = date[1]
  const seconds = date[2]

  if (s.includes('PM')) {
    if (hours < 12) {
      const newPmHours = hours + 12
      return `${newPmHours}:${minutes}:${seconds}`
    }
    if (hours == 12) {
      return `${hours}:${minutes}:${seconds}`
    }
  } else if (s.includes('AM')) {
    if (hours == 12) {
      const newAmHours = hours - 12
      return `${newAmHours.toString().padStart(2, '0')}:${minutes}:${seconds}`
    }
    if (hours < 12) {
      return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`
    }
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}