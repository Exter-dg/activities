arraysJS();

function letVsVarJS() {
    var a = 5;
    let b = 10;

    console.log(d); // - prints undefined
    // console.log(c); // - Reference Error  Not Defined

    console.log(a+b);
    {
        let c = 11;
        var d = 4
        console.log(a);
    }
    //console.log(d);
    // console.log(c) // - Reference Error: Not Defined
}

function arraysJS() {
    console.log("Hello World");
    var arr = [1, 2, 3, 'a'];
    arr.forEach((element,i) => {
       console.log(element+" "+i); 
    });
    console.log(typeof arr); // object

    const cars = [
        "Saab",
        "Volvo",
        "BMW"
    ]; 

    console.log(typeof cars); // object

    console.log(Array.isArray(cars)); // true

    // You can change an element:
    cars[0] = "Toyota";
    console.log(cars.length);

    const iterable = [10, 20, 30];

    for (let value of iterable) {
        value += 1;
        console.log(value); // 11 21 31
    }
    console.log(iterable[0]); // 10

    const arr2 = ['a', 'b', 'c'];
    arr2.test = 'bad';

    // Prints "a, b, c, bad"
    for (let i in arr2) {
        console.log(arr2[i]);
    }

    // Prints "a, b, c" - ignores non-numeric keys
    for (let i = 0; i < arr2.length; ++i) {
        console.log(arr2[i]);
    }

    const arr3 = ['a',, 'c'];
    for (let i = 0; i < arr3.length; ++i) {
        console.log(arr3[i]);
    }
    arr3.forEach(v => console.log(v));

    for (let i in arr3) {
        console.log(arr3[i]);
    }

    for (const v of arr3) {
        console.log(v);
    }
}