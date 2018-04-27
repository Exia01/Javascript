var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
];
// console.log(students[0].first_name + " "+ students[0].last_name);

function printNames(){
  for(var idx=0; idx<students.length; idx++){ //loop trough the array?
  console.log(students[idx].first_name + " "+ students[idx].last_name);
}
}
printNames2();
var students = [ 
    {first_name:  '1 - Michael', last_name : 'Jordan - 13'},
    {first_name : '2 - John', last_name : 'Rosales'},
    {first_name : '3 - Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
];
// console.log(students[0].first_name + " "+ students[0].last_name);

function printNames2(){
  for(var idx=0; idx<students.length; idx++){ //loop trough the array?
  console.log(students[idx].first_name + " "+ students[idx].last_name);
}
}
printNames();

// function printNames(students, ){
//     for(i = 0; i<students.length; i++){
//         console.log(i[students.first_name], [students.last_name]);
//     }
// }

// console.log(students[i]);
// printNames();
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel

// var glazedDonuts = [
//   {
//     frosting: 'glazed',
//     style: 'cake',
//     type: 'old fashioned',
//     age: '45',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     style: 'yeast raised',
//     type: 'regular',
//     age: '5',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     style: 'yeast raised',
//     type: 'jelly filled',
//     age: '1',
//     time: 'seconds'
//   }
// ];
// console.log(glazedDonuts[0].type+ " " +glazedDonuts[0].time);
// var purchase;
//You
// if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds'){
//   //shop owner
//   purchase = glazedDonuts[0];
// }
// else {
//   console.log('sorry it has been out a bit longer');
// }