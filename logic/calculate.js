// Calculate Functions.

// Square/Rectangle
function squarePerimeter() {
    const width = document.getElementById("sqr__width");
    const height = document.getElementById("sqr__height");
    const calc = (width.value * 2) + (height.value * 2);
    sqrResult(calc.toFixed(2),"cm","perimeter","./src/square.svg");
}

function squareArea() {
    const width = document.getElementById("sqr__width");
    const height = document.getElementById("sqr__height");
    const calc = width.value * height.value;
    sqrResult(calc.toFixed(2),"cm²","area","./src/square.svg");
}

const sqrResult = function(calc,measure,type,img) {
    const writeResult = document.getElementById("sqr__result");
    writeResult.innerHTML = 
    `<h4>Result:</h4>
    <figure>
        <img src="${img}" alt="square_op">
    </figure>
    <p>The square's ${type} is: ${calc}${measure}</p>`;
    writeResult.style.display = "block";
}


// Isosceles Triangle
function trianglePerimeter() {
    const side = document.getElementById("trg__side");
    const base = document.getElementById("trg__base");
    const calc = (side.value * 2) + parseFloat(base.value);
    trgResult(calc.toFixed(2),"cm","perimeter","./src/triangle_perimeter.svg");
}

function triangleArea() {
    const side = document.getElementById("trg__side");
    const base = document.getElementById("trg__base");
    const height = Math.sqrt((side.value ** 2) - ((base.value ** 2) / 4));
    const calc = (base.value * height) / 2;
    trgResult(calc.toFixed(2),"cm²","area","./src/triangle_area.svg");
}

const trgResult = function(calc,measure,type,img) {
    const writeResult = document.getElementById("trg__result");
    writeResult.innerHTML = 
    `<h4>Result:</h4>
    <figure>
        <img src="${img}" alt="triangle_op">
    </figure>
    <p>The triangle's ${type} is: ${calc}${measure}</p>`;
    writeResult.style.display = "block";
}


// Perfect Circle
function circlePerimeter() {
    const radius = document.getElementById("crl__radius");
    const calc = (radius.value * 2) * Math.PI;
    crlResult(calc.toFixed(2),"cm","perimeter","./src/circle.svg");
}

function circleArea() {
    const radius = document.getElementById("crl__radius");
    const calc = (radius.value ** 2) * Math.PI;
    crlResult(calc.toFixed(2),"cm²","area","./src/circle.svg");
}

const crlResult = function(calc,measure,type,img) {
    const writeResult = document.getElementById("crl__result");
    writeResult.innerHTML = 
    `<h4>Result:</h4>
    <figure>
        <img src="${img}" alt="square_op">
    </figure>
    <p>The circle's ${type} is: ${calc} ${measure}</p>`;
    writeResult.style.display = "block";
}