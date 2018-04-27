// var arr =[1, "apple", -3, "orange", 0.5,"grape", "bananas"];
// // newArray is [1, -3, 0.5]
// var  newarr = [];
// function numbersOnly(){
//     for(var i=0; i<arr.length; i++){
//         if(typeof arr[i] === "number"){
//         newarr.push(arr[i]);}
//     }
//     console.log(newarr);
// }
// numbersOnly();


// var arr =[1, "apple", -3, "orange", 0.5, "grape", "bananas"];
// // newArray is [1, -3, 0.5]
// function numbersOnly2(){
//     for(var i=arr.length; i>-1; i--){
//         if(typeof arr[i] !== "number"){
//             arr.splice(i,1);
//     }
//    }  
//    console.log(arr);
// }
// numbersOnly2();
var arr =[1,2,3,4,5,6];
var newarr = arr

function swapA(arr) {
    for(var i = arr.length-1; i=>-1; i-- ){
    var temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;}
    console.log(arr); 
}
swapA(arr);

function swap( arr , slot1, slot2){
    var newArr = arr;
    var tempVal = newArr[slot2];
    arr[slot2] = arr[slot1];
    arr[slot1] = tempVal;
    return newArr;
  }
