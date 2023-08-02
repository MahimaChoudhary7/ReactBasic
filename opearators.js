console.log(2+2);
console.log(1+2+3+4+5);
console.log(20-18);
console.log(2*3);
console.log(8/1);
console.log(3>2);
console.log(2>3);
console.log(1==10);
console.log(2+3*6);
var currentTime=10;
console.log(currentTime>9 && currentTime<17);
console.log(10>9 && 10<17);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
var currentTime=7;
console.log(currentTime<9 || currentTime>17);
console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(false || false);
var petHungry=true;
console.log('Feeding the pet');
console.log("Pet is hungry:",!petHungry);
console.log(petHungry);
petHungry=!petHungry;
console.log(petHungry);
console.log(22%5);
console.log(5==5);
console.log(5==6);
console.log(5=="5");
console.log(5===5);
console.log(5==="5");
console.log(5!="5");
console.log(5!=="5");
console.log("inter" + "net");
console.log("note" + "book");
console.log(365 + " days");
console.log(12 + " months");
console.log(1 + "2");
var mon=1;
var tue=2;
var wed=1;
var thu=2;
var fri=3;
console.log(mon+tue+wed+thu+fri);
var overtime=1;
overtime+=2;
overtime+=1;
overtime+=2;
overtime+=3;
console.log(overtime);
var longString="";
longString+="Once ";
longString+="upon ";
longString+="a ";
longString+="time ";
longString+="...";
console.log(longString);
console.log(1*2+3);
var num=10;
console.log(5>4>3);
var food="hot";
if(food=="hot") {
    console.log('Too hot')
}
else if(food=="cold") {
    console.log('Too cold')
}
else {
    console.log('Just Right')
}
console.log("The food is tasty and",food);
var result=30;
if (result > 40) {
    console.log('You passed the test')
}
else {
    console.log('You did not pass the test')
}
var place='first';
if (place=='first') {
    console.log('Gold')
}
else if(place=='second') {
    console.log('silver')
}
else if(place=='third') {
    console.log('Bronze')
}
else{
    console.log('No medal')
}
var place='first';
switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default :
        console.log('No Medal');
}
var light="red";
if(light=="green") {
    console.log("Drive")
}
else if(light=="orange") {
    console.log("Get ready")
}
else if(light=="red") {
    console.log("Don't Drive")
}
else {
    console.log("The light is not green,orange or red ");
}
var light="orange";
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get Ready");
        break;
    case 'red':
        console.log("Don't Drive"); 
        break;
    default:
        console.log("The light is not green,orange or red");
        break;
}
console.log('1');
console.log('2');
console.log('3');
console.log('Go!');
console.log(3 + + '3');
for(var firstNum=0;firstNum<2;firstNum++) {
    for(var secondNum=0;secondNum<10;secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum*secondNum);
    }
}
for(var i=100;i>10;i=i-10) {
    for(var j=10;j>4;j=j-5) {
        console.log(i + " divided by " + j + " equals " + i/j);
    }
}
var cubes="ABCDEFG";
for(var i=0;i<cubes.length;i++) {
    var styles= "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i],styles)
}



