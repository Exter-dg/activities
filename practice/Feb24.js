dateJS()

// document.getElementById("heading").innerHTML="Hello";
// alert("hellp Parth");


function addImageDOM() {
    var img = new Image();
    img.src = 'icon.png';
    document.body.appendChild(img);
}


function addPDOM() {
    var element = document.createElement('p')
    element.textContent="Hi Parth";
    document.body.appendChild(element);
}

function innHTML() {
    let element = document.getElementById("div1");
    // alert("InnerHTML: "+element.innerHTML);
    // alert("textContent"+element.textContent);
    element.innerHTML="<h1>Head</h1>"
    element.textContent="<h1>Head</h1>"
}

function variableJS() {
    var a = 5;
    let b = 5;
    alert(b)
}

function arrayJS() {
    var arr = []; // empty array
    console.log(arr);
    var cars = ["Toyota", "Ferrari", "Lexus"];
    console.log(cars);
    windlow.alert(cars[1]);
}

function dateJS() {
    const d = new Date();
    console.log(d);
    const d2 = new Date(2022, 1, 14, 10, 33, 30, 0);
    console.log(d2)
    const d3 = new Date(0);
    console.log(d3);
}

function stringJS() {
    let txt = "Hello World!";
    let length = txt.length;
    console.log(length);
    let part = txt.slice(3);
    let part = txt.slice(-3);
    console.log(part);
    //part = txt.substring(-33);
    part = txt.substring(3);

    let text = "Hello World!";
    let newText = text.replace("Hello", "World");
    console.log(newText);

    console.log(newText.toUpperCase());

    console.log("hello"+" world");

    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    console.log(text2);

    let char = text.charAt(0);
    console.log(char);
    console.log(text[0]);
    //text[0] = "A"; 
    console.log(text.split(" "));
}

