// Calculate Functions.

// Square/Rectangle
function squarePerimeter() {
    const width = document.getElementById("sqr__width");
    const height = document.getElementById("sqr__height");
    const calc = (width.value * 2) + (height.value * 2);
    sqrResult(calc.toFixed(2),"cm","perimeter");
}

function squareArea() {
    const width = document.getElementById("sqr__width");
    const height = document.getElementById("sqr__height");
    const calc = width.value * height.value;
    sqrResult(calc.toFixed(2),"cm²","area");
}

const sqrResult = function(calc,measure,type) {
    const writeResult = document.getElementById("sqr__result");
    writeResult.innerHTML = 
    `<h4>Here's your result</h4>
    <p>The square's ${type} is: ${calc} ${measure}</p>`
    ;
}


// Isosceles Triangle
function trianglePerimeter() {
    const side = document.getElementById("trg__side");
    const base = document.getElementById("trg__base");
    const calc = (side.value * 2) + parseFloat(base.value);
    trgResult(calc.toFixed(2),"cm","perimeter");
}

function triangleArea() {
    const side = document.getElementById("trg__side");
    const base = document.getElementById("trg__base");
    const height = Math.sqrt((side.value ** 2) - ((base.value ** 2) / 4));
    const calc = (base.value * height) / 2;
    trgResult(calc.toFixed(2),"cm²","area");
}

const trgResult = function(calc,measure,type) {
    const writeResult = document.getElementById("trg__result");
    writeResult.innerHTML = 
    `<h4>Here's your result</h4>
    <p>The triangle's ${type} is: ${calc} ${measure}</p>`
    ;
}


// Perfect Circle
function circlePerimeter() {
    const radius = document.getElementById("crl__radius");
    const calc = (radius.value * 2) * Math.PI;
    crlResult(calc.toFixed(2),"cm","perimeter");
}

function circleArea() {
    const radius = document.getElementById("crl__radius");
    const calc = (radius.value ** 2) * Math.PI;
    crlResult(calc.toFixed(2),"cm²","area");
}

const crlResult = function(calc,measure,type) {
    const writeResult = document.getElementById("crl__result");
    writeResult.innerHTML = 
    `<h4>Here's your result</h4>
    <p>The circle's ${type} is: ${calc} ${measure}</p>`
    ;
}