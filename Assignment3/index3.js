/*Question 1: Write javascript program for below pattern using a nested for loop

*
**
***
****
*****

*/

for(let i=1; i<=5; i++)
    {
    let pattern = " ";
            for(let j=1; j<=i; j++){
                pattern += "*" + " ";
            }
            console.log(pattern);
    }

/*Question 2: Iterate through all the numbers from 1 to 45, print the following
multiple of 3 - "Fizz"
multiple of 5 - "Buzz"
multiple of 3 and 5 - "FizzBuzz" */

let n =45;
for(let i=1; i<=n; i++)
{
    if((i % 3 == 0) && (i % 5 == 0))
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        console.log("Fuzz");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

/*Question 3: calculate the sum of all the number in following array
var numbersArray = [1,13,22,123,49] */

var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;
for (var i = 0; i < numbersArray.length; i++) {
    sum = sum + numbersArray[i];
}
console.log("Sum=", sum);

/*Question 4: Get the sum of element of 2 array:
let arr1 = [3,5,22,5,7,2,45,75,89,21,2]
let arr2 = [9,2,42,55,,71,22,4,5,,90,25,26]
*/
let arr1 = [3,5,22,5,7,2,45,75,89,21,2];
let arr2 = [9,2,42,55,71,22,4,5,90,25,26];

let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 + arr1[i];
}
console.log("Sum of first array=", sum1);

for (let j = 0; j < arr2.length; j++) {
    sum2 = sum2 + arr2[j];
}
console.log("Sum of second array=", sum2);

let total_sum = sum1 + sum2;

console.log("Total of both array is=", total_sum)



/*Question 5: Using a for loop output the elements in reverse order
let arr = [43, "what", 9, true,"cannot", false, "be", 3, true]
*/

let array1 = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = array1.length - 1; i >= 0; i--) {
    console.log(array1[i]);
}


