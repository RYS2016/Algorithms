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
        // Extract the period (AM/PM) and the time components
    const period = s.slice(-2); // AM or PM
    const [hours, minutes, seconds] = s.slice(0, -2).split(":").map(Number);

    let militaryHours;

    if (period === "AM") {
        // For AM, if the hour is 12, convert it to 0 (midnight)
        militaryHours = hours === 12 ? 0 : hours;
    } else {
        // For PM, if the hour is 12, keep it as 12; otherwise, add 12
        militaryHours = hours === 12 ? 12 : hours + 12;
    }

    // Format hours, minutes, and seconds to be two digits each
    const formattedHours = militaryHours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
