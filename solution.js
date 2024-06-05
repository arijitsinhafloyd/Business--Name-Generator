console.log("Solution");
/*I am using Math.random() function to create it.
I am dividing it into two parts
one is from 0 to 0.33, then 0.33 to 0.66 and then 0.66 to 0.99
so like this it will lie b/w 0 to 100, by means of 33% each*/

let n1=Math.random();
let first,second,third;
//First Word
if(n1<0.33){
    first="Crazy";
}
else if(n1>0.33 && n1<0.66){
    first="Amazing"
}
else{
    first="Fire";
}
//Second Word
if(n1<0.33){
    second="Engine";
}
else if(n1>0.33 && n1<0.66){
    second="Food"
}
else{
    second="Garments";
}
//Third Word
if(n1<0.33){
    third="Bros";
}
else if(n1>0.33 && n1<0.66){
    third="Limited"
}
else{
    third="Hub";
}

console.log(first+" "+second+" "+third);
