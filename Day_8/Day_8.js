function processData(input) {
    //Enter your code here
        input = input.split('\n'); 
    var n = parseInt(input[0]); 
    var phoneBook = [];
     
    //Add values to the phoneBook dictionary.
    for (var i = 0; i < n; i++){
        var newinput = input[i+1];
        newinput = newinput.split(' ');
        phoneBook[newinput[0]] = newinput[1];
    } 
     
    //Check if values are in dictionary.
    for (var i = n+1; i < input.length; i++){
        var num = (phoneBook[input[i]]);
        if (num !== undefined) {
            console.log(input[i]+'='+num);
        } else {
            console.log('Not found');
        }
    }
}
//end of my code 
//below is given by the challange
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
