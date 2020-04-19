//function checkDivisors
let checkDivisors = (num) => {
    let newArray = []; // Create a new Array
    let checkedArray = [];

        // array of numbers/integers from 1 to the given parameter saved in newArray
    for (let i=1; i<=num; i++){

        newArray.push(i);
    }  
            /*
               this checks if the Integer is divisible by 2, 3 and 5 then replace with the appropriate words as specified  yu,gi,oh
                then add the corresponding values of each checking to a new array "checkedArray"*/ 

    for (num of newArray) {
        if ((num % 2 === 0) && (num % 3 === 0) && (num % 5 === 0)) {
            checkedArray.push("yu-gi-oh");
        } else if ((num % 2 === 0) && (num % 3 === 0)) {
            checkedArray.push("yu-gi");
        } else if ((num % 2 === 0) && (num % 5 === 0)) {
            checkedArray.push("yu-oh");
        } else if ((num % 3 === 0) && (num % 5 === 0)) {
            checkedArray.push("gi-oh");
        } else if (num % 2 === 0) {
            checkedArray.push("yu");
        } else if (num % 3 === 0) {
            checkedArray.push("gi");
        } else if (num % 5 === 0) {
            checkedArray.push("oh");
        }else {
            checkedArray.push(num);
        }
    }
            // return checkedArray 
    return checkedArray;
}
// called the function checkDivisors with 80 in terminal
console.log (checkDivisors(80));



/*
The output 
[
    1,       'yu',    'gi',    'yu',    'oh',
    'yu-gi', 7,       'yu',    'gi',    'yu-oh',
    11,      'yu-gi', 13,      'yu',    'gi-oh',
    'yu',    17,      'yu-gi', 19,      'yu-oh',
    'gi',    'yu',    23,      'yu-gi', 'oh',
    'yu',    'gi',    'yu',    29,      'yu-gi-oh',
    31,      'yu',    'gi',    'yu',    'oh',
    'yu-gi', 37,      'yu',    'gi',    'yu-oh',
    41,      'yu-gi', 43,      'yu',    'gi-oh',
    'yu',    47,      'yu-gi', 49,      'yu-oh',
    'gi',    'yu',    53,      'yu-gi', 'oh',
    'yu',    'gi',    'yu',    59,      'yu-gi-oh',
    61,      'yu',    'gi',    'yu',    'oh',
    'yu-gi', 67,      'yu',    'gi',    'yu-oh',
    71,      'yu-gi', 73,      'yu',    'gi-oh',
    'yu',    77,      'yu-gi', 79,      'yu-oh'
  ] 
 "*/ 