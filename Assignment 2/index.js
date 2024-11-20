/*Question 3: Find the maximum out of three Number

function max_out_of_three()
{
    let a = parseInt(prompt("a="));
    let b = parseInt(prompt("b="));
    let c = parseInt(prompt("c="));
    if (a === b && b === c) {
        return '-1-1';
    } else {
        return Math.max(a, b, c);
    }
}
console.log(max_out_of_three())*/

/*Question 4: Second Smallest number
function find2ndSmallest()
{
    let X = parseInt(prompt("X="));
    let Y = parseInt(prompt("Y="));
    let Z = parseInt(prompt("Z="));
    if ((X < Y && X > Z) || (X > Y && X < Z)) {
        return X;
    } else if ((Y < X && Y > Z) || (Y > X && Y < Z)) {
        return Y;
    } else {
        return Z;
    }
}
console.log(find2ndSmallest());*/

/*Question 5: Check whether the triangle is Acute and Obtuse
function Triangle_Check() {
    let angle1 = parseInt(prompt("Enter angle 1:"));
    let angle2 = parseInt(prompt("Enter angle 2:"));
    let angle3 = parseInt(prompt("Enter angle 3:"));
    if (angle1 + angle2 + angle3 !== 180) {
        return "Not a valid triangle";
    }
    if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
        return "Acute triangle";
    } else {
        return "Obtuse triangle";
    }
}
console.log(Triangle_Check());*/
