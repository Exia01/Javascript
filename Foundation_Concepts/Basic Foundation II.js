// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

var arr1 = [-1, 3, 5, -5];
function makeItBig() {
    for (i = 0; i < arr1.length - 1; i++) {
        if(arr1[i] > 0){
            arr1[i] = "big"
        }
    }
return arr1;
}
console.log(makeItBig());