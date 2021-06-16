function f() {
    console.log(typeof f); //function
    // var f = 3;
    f = 3;
   console.log(typeof f); //number
};

f();

var s = function s() {
    console.log(typeof s); //function
    // var s = 3;
    s = 3;
    console.log(typeof s); //function 
};

s();