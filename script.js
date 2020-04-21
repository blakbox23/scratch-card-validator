//
//function to calculate the sum of the number until the number is one digit long.
//

document.getElementById('submit1').addEventListener("click",validateScratchCard);

function validateScratchCard(){

    function sumFunct(n) {
    sum = 0;
    while(n > 0 || sum > 9)
        {
            if(n == 0)
            {
                n = sum;
                sum = 0;
            }
            sum = sum+n % 10;
            n = Math.floor(n/10);
        }
        return(sum);
    }
//
//function to convert to octal 
//    
function toOctal(decim){
  return decim.toString(8)
}
//
//Function to validate the first set of five numbers
//
function validateA(){
let a = document.getElementById('inp1').value;

/*the following line takes the user input and SUBSTRINGS it to take the first four digits,
  it then converts the STRING to a number and assigns to to ACALC.
  the fifth digit is assigned to a variable checksum
*/
let acalc = Number.parseInt(a.substring(0, 4));
let checksumA = Number.parseInt(a.substring(4,5));
//console.log(acalc);
//console.log(checksumA);

//this line takes the TOOCTAL(ln22) function with the argument ACALC(ln35) 
//the SUMFUNCT function then takes the result as its parameter and this is stored in the OCTCALC variable. 
let octcalca =sumFunct(toOctal(acalc))
console.log(octcalca);

//the return of this whole function is determined by an if statement 
if(checksumA===octcalca){
  return true;
}else{
  return false;
}
};
console.log(validateA())

function validateB(){
let b = document.getElementById('inp2').value;
//console.log(document.getElementById('inp1').value)
let bcalc = Number.parseInt(b.substring(0, 4));
let checksumB = Number.parseInt(b.substring(4,5));
//console.log(bcalc);
//console.log(checksumB);

let octcalcb =sumFunct(toOctal(bcalc))
console.log(octcalcb);

if(checksumB===octcalcb){
  return true;
}else{
  return false;
}
};
console.log(validateB());

function validateC(){
let c = document.getElementById('inp3').value;
//console.log(document.getElementById('inp1').value)
let ccalc = Number.parseInt(c.substring(0, 4));
let checksumC = Number.parseInt(c.substring(4,5));
//console.log(ccalc);
//console.log(checksumC);

let octcalcc =sumFunct(toOctal(ccalc));
console.log(octcalcc);

if(checksumC===octcalcc){
  return true;
}else{
  return false;
}
};
console.log(validateC());

function validateD(){
let d = document.getElementById('inp4').value;
//console.log(document.getElementById('inp1').value)
let dcalc = Number.parseInt(d.substring(0, 4));
let checksumD = Number.parseInt(d.substring(4,5));
//console.log(dcalc);
//console.log(checksumD);

let octcalcd =sumFunct(toOctal(dcalc))
console.log(octcalcd);
//console.log(fun(toOctal(1234)));

if(checksumD===octcalcd){
  return true;
}else{
  return false;
}
};
console.log(validateD())



if((validateA() ===true) && (validateB() ===true) && (validateC()===true) && (validateD()===true)){
  console.log ("TRUE");
  document.getElementById('message').innerHTML='VALID';
}else if((validateA() ===false) || (validateB() ===false) || (validateC()===false) || (validateD()===false)){
  console.log  ("FALSE");
  document.getElementById('message').innerHTML="INVALID";
}else{
  document.getElementById('message').innerHTML="Check again";

}

};


    
/*function sub (){
  document.querySelector('#inp1').addEventListener("blur",validateA);
  document.querySelector('#inp2').addEventListener("blur",validateB);
  document.querySelector('#inp3').addEventListener("blur",validateC);
  document.querySelector('#inp4').addEventListener("blur",validateD);
  document.querySelector('#submit1').addEventListener("click",validate);
}*/
    