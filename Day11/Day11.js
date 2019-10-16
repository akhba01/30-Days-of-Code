'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let arr = [];
    let arr_2 = [];
    for(arr_2 = 0; arr_2 < 6; arr_2++){
       arr[arr_2] = readLine().split(' ');
       arr[arr_2] = arr[arr_2].map(Number);
    }

    //totalSum initializes at -63 because that is lowest possible outcome for any hourglass.
    //-9 -9 -9
    //   -9
    //-9 -9 -9 = -63
    let totalSum = -63;
    for (let i = 0; i < arr.length-2; i++) {
        for (let j = 0, curSum = 0; j < arr[i].length-2; j++) {
            //                  //i=0; j=0     i=0; j=1    i=0; j=2    i=0; j=3
            curSum = arr[i][j] +     //arr[0][0]    arr[0][1]   arr[0][2]   arr[0][3]
                     arr[i][j+1] +   //arr[0][1]    arr[0][2]   arr[0][3]   arr[0][4]
                     arr[i][j+2] +   //arr[0][2]    arr[0][3]   arr[0][4]   arr[0][5]
                     arr[i+1][j+1] + //arr[1][1]    arr[1][2]   arr[1][3]   arr[1][4]
                     arr[i+2][j] +   //arr[2][0]    arr[2][1]   arr[2][2]   arr[2][3]
                     arr[i+2][j+1] + //arr[2][1]    arr[2][2]   arr[2][3]   arr[2][4]
                     arr[i+2][j+2];  //arr[2][2]    arr[2][3]   arr[2][4]   arr[2][5]
            if (curSum > totalSum) { //We're checking for MAX hourglass value, so if curSum is greater, set that one.
                totalSum = curSum;
            }
        }
    }
    console.log(totalSum);
}
