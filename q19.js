// Q19-Write a JavaScript function that returns the number of minutes in hours and minutes.

function timeConvert(minutes) {
    const hours = Math.floor(minutes / 60);
    const MinutesLeft = minutes % 60;
    return `${minutes} minutes = ${hours} hour(s) and ${MinutesLeft} minute(s).`;
}

console.log(timeConvert(200)); 
