/* Question 1:You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of
character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
Note: You have to complete countCharacters function. No need to take any input.
*/
/*function countCharacters() {
    let S = prompt("Enter a string:");
    let countA = 0;
    let countD = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') {
            countA++;
        } else if (S[i] === 'D') {
            countD++;
        }
    }
    return [countA, countD];
}
let result = countCharacters();
console.log(result);

/*Question 3: You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the
given string.
Note: You have to complete Count_Vowel function. No need to take any input.
*/
/*function Count_Vowel(S) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let i = 0; i < S.length; i++) {
        if (vowels.indexOf(S[i]) !== -1) {
            vowelCount++;
        }
    }
    return vowelCount;
}
let inputString = "Shruti";
let result = Count_Vowel(inputString);
console.log(result);

/* Question 4: You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the
concatenation of both the given strings.
Note: You have to complete Concatenate_Strings function. No need to take any input.
*/

/*function Concatenate_Strings(String1, String2) {
    return String1 + String2;
}

var String1 = "Prep";
var String2 = "bytes";
var String3 = String1 + String2;
console.log(String3);

/*Question5: You are given a string S, and your task is to return the length of the string S.
Note: You have to solve it without using length method. You have to complete findLength function.
No need to take any input.
*/
function findLength(S) {
    let count = 0;
    for (let i = 0; S[i] !== undefined; i++) {
        count++;
    }
    return count;
}
let S = "HelloWorld";
console.log(findLength(S));

