var num = prompt("Write a number")
while(isNaN(num) || num==""){
    alert("You didn't write number")
    var num = prompt("Write a number")
}
if(num%2==0){
    console.log("Your number is even")
}
else if(num%2==1){
    console.log("Your number is odd")
}