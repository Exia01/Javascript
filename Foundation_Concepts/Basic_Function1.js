function a(){
    return 35;
}
console.log(a())
// This will output 35.


function a(){
    return 4;
}
console.log(a()+a());
//This will output 8 

function a(b){
    return b;
}
console.log(a(2)+a(4));
//This will output 6 

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//This will output 3, then 9

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
 //This will output 16
 
 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//This will output 4 because of the return statement. 

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//First will output 10,3 because it is not calling in a fuction
//Secondly it will output 30

function a(b){
    for(i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Both console logs are not calling in any functions; instead it'll just log the numbers

function a(){
    for(i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// This will output --> 0,2,4,6,8
//Correction This will run as follows;
// i<0 therefore we add 2 then i++, 3 is <10  so we add two more log that and i++ and so on

function a(b,c){
    for(i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//This will output 0,1,2,3,4,5,6,7,8,9 will stop at 10 because we are assigning c the value of 10
//0*10 ==0 
//Second output is calling the equation again.

function a(){
    for(i=0; i<10; i++){
       for(j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
a();
//This will first log 0-9 then log the current i and repeat untill it stop with i being 9

function a(){
    for(i=0; i<10; i++){
        for(j=0; j<10; j++){
            console.log(i,j);
        }
    console.log(j,i);
}
}
a();

//This will first log the current i meaning 0, and j 0-9
//I think J resets so this will run along after each loop meaning 0,9 and log the current i
//I was mistaken, J does not reset instead it add the ++ to make it 10 
//The second loop will instead output 10-with the current i value

z = 10;
function a(){
    z = 15;
    console.log(z);
}
a();
console.log(z);

//z first is a global variable, then inside the function we are changing the global variable to a local variable
//The console.log will first register the change inside local then log the global
//Output 15, then 10 

z = 10;
function a(){
    z = 15;
    console.log(z);
}
a();
console.log(z);

z = 10;
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);