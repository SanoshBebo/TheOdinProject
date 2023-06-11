// function add7 (no){
//     return no + 7;
// }
// function multiply (no1,no2){
//     return no1*no2;
// }
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// }
// function lastLetter (str){
//     return str.slice(-1);
// }

// console.log(add7(5))
// console.log(multiply(2,4));
// console.log(capitalize("sanosh"));
// console.log(lastLetter("abcd"));


function fizzBuzz(number){
    for( let i=1; i<=number ;i++){
        if(i%3==0 && i%5==0){
            console.log('fizz');
        } else if(i%5==0){
            console.log('buzz');
        }
        else if(i%3==0){
            console.log('fizzbuzz');
        }else console.log(i);
    }
}
fizzBuzz(50);