function myFunction() {
                var num2 = 50;
                var num3 = 20;
                var num4 = num2 * num3;
                console.log(num4);
}
myFunction();


function funMy( newfun, newfun2 ) {
var add = newfun+newfun2;
return add;
}
var one = funMy(10, 20);
console.log(one);

function youFun ( ami, ami2 ) {
    return ami+ami2;
}
var jog = youFun( 900, 1000 );
console.log(jog);



function justFun( num7, num8 ) {
    var add2 = num7*num8;
    return add2;
}
var add3 = justFun( 4, 5);
console.log(add3);

// /number 5 function
function meFun( a, b){
    return a+b;
}
var c = meFun (1,2);
console.log(c);

//number 6 function
function lima1( devi1, devi2) {
    return devi1-devi2;
}
var ridoyAdd = lima1(9, 8);
console.log(ridoyAdd);

//(7)function er vitor for loop
function alu( moric) {
    var begun = 1;
    for (var i = 1; i <=5; i++) {
        begun = begun*i;
        
    }
    return begun;
}
var result = alu(5);
console.log("resutl:", result);