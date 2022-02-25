// Operators

//constantsJS();
//NaNJS();
infinityJS();

function constantsJS() {
    console.log("Typeof null: " + typeof null);
    console.log("Typeof undefined: " + typeof undefined);
    //console.log("Typeof NaN: " + typeof NaN);

    // undefined
    // var testVar;
    // console.log(testVar); //shows undefined
    // console.log(typeof testVar); //shows undefined

    // null
    // var testVar = null;
    // console.log(testVar); //shows null
    // console.log(typeof testVar); //shows object

    // var test1; // undefined - doesn't exist - removed in JSON serialization
    // var test2 = null; // explicitly  convey the concept of "Empty" property
    // console.log(test1==test2) // true
    // console.log(test1===test2) // false


    // https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript?page=1&tab=votes#tab-top

}

function NaNJS() {
    // NaN - Not a Number

    //console.log("Typeof NaN: "+typeof(NaN));

    // var test1 = 0/0;
    // console.log("Test1 is: "+test1); // NaN

    // var test2 = 5/0;
    // console.log("Test2 is: "+test2); // Infinity
    // https://stackoverflow.com/questions/18838301/in-javascript-why-does-zero-divided-by-zero-return-nan-but-any-other-divided-b



    // console.log("Are two NaNs equal?: "+(NaN==NaN))



    //-----------------------------------------------------
    // isNaN and Number.isNaN

    // isNaN converts the argument to a Number and returns true if the resulting value is NaN.
    // Number.isNaN does not convert the argument; it returns true when the argument is a Number and is NaN.


    // console.log(isNaN({}));
    // // <- true, Number({}) is not a number
    // console.log(isNaN('34abc'));
    // // <- true, Number('ponyfoo') is NaN, NaN is not a number
    // console.log(isNaN(NaN));
    // // <- true, NaN is not a number
    // console.log(isNaN('pony'/'foo'));
    // // <- true, 'pony'/'foo' is NaN, NaN is not a number
    // console.log(isNaN(undefined));
    // // <- true, Number(undefined) is NaN, NaN is not a number

    // console.log(Number.isNaN({}));
    // // <- false, {} is not NaN
    // console.log(Number.isNaN('ponyfoo'));
    // // <- false, 'ponyfoo' is not NaN
    // console.log(Number.isNaN(NaN));
    // // <- true, NaN is NaN
    // console.log(Number.isNaN('pony'/'foo'));
    // // <- true, 'pony'/'foo' is NaN, NaN is NaN
    // console.log(Number.isNaN(undefined));
    // // <- false, undefined is not NaN


    // Special case - Arrays
    // console.log(isNaN([])); // false
    // console.log(isNaN([245])); // false
    // console.log(Number([245])); // 235
    // // [235] -> "235" -> 235
    // console.log(isNaN([23, 51])); // true
    // // [23, 51] -> "23 51" -> NaN
    // console.log(Number([23, 51])); // NaN

    // https://stackoverflow.com/questions/33164725/confusion-between-isnan-and-number-isnan-in-javascript

    //----------------------------------------------------

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    // https://stackoverflow.com/questions/2801601/why-does-typeof-nan-return-number
}

function infinityJS() {
    // console.log(Number.POSITIVE_INFINITY === Infinity);
    // console.log(Number.NEGATIVE_INFINITY === -Infinity);

    // console.log(Infinity          ); /* Infinity */
    // console.log(Infinity + 1      ); /* Infinity */
    // console.log(Math.pow(10, 1000)); /* Infinity */
    // console.log(1 / Infinity      ); /* 0 */
    // console.log(1 / 0             ); /* Infinity */
    // console.log(1 / -0            ); /* -Infinity */
    // console.log(Infinity>Number.MAX_VALUE); /* true */
    // console.log(Infinity===Infinity); /* false */

    // console.log(Number.MAX_VALUE); // 64 bits
    // console.log(Number.MAX_SAFE_INTEGER); // 53 bits

    // console.log(3===3);
    // console.log(3===4);
    // console.log(Number.MAX_SAFE_INTEGER-1 === Number.MAX_SAFE_INTEGER-2);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
}
if(null){
    console.log("Print A")
}else if (""){
    console.log("Print B")
}else if ([]){
    console.log("Print C")
}else if (undefined){
    console.log("Print D")
}