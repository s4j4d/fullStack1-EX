/////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Q1.
Write a finction ti find sub-array of given array. O(n**2) is not permitted.
*/
 const array1 = "Mapsa HR Node.js"
 const pattern = "Mapsa"

 function findcd  SubArray(array, theOneThatIAmLookingFor){
    for(let i=0;i<array.length-1;i++){
        console.log(i);
        if (pattern == array.slice(i, i+pattern.length))
            return true
    }
 }

console.log(findSubArray(array1, "Mapsa"));

/*
//// pseudocode \\\\
1. Create a function. 
2. Look for each index of array if it has similar elements with in given array.
3. if yes returne true / if not returne false
*/

/////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Q2.
Write a function that act like Promise.All
*/





/////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Q3.
Write a calculator that utilize the following characters as operator sign.
# = Sum
@ = Multiplication
~ = Subtraction
\\ = Devision

E.g.
Input → str = “(2 # 3) @ 8 \\ 2 ~ 4 # 2”;
Output → 18;
*/




/////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Q4

*/





/////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
Q5

*/






