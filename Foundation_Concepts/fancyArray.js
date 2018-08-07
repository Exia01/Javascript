// arr = ["James", "Jill", "Jane", "Jack"]

// function printArr(){
//     for(var i=0; i<arr.length; i++){
//         console.log(i + " --> " + arr[i]);
//     }
// }

// printArr(arr);

arr1 = ["abc", 3, "yo"];
arr2 = [42, "wassup", "yo"];

   
function map(arr1, arr2) {
 var dict = {};
    for (var i = 0; i < arr1.length; i++) {
        dict[arr1[i]] = arr2[i];
    }
    return dict;
}
map();

