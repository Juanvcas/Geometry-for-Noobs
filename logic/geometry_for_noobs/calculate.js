// Calculate Functions.

// Square/Rectangle
function squarePerimeter() {
    const width = document.getElementById("sqr__width");
    const height = document.getElementById("sqr__height");
    const calc = (width.value * 2) + (height.value * 2);
    sqrResult(calc.toFixed(2),"cm","perimeter","./src/geometry_for_noobs/square.svg");
}

function squareArea() {
    const width = document.getElementById("sqr__width");
    const height = document.getElementById("sqr__height");
    const calc = width.value * height.value;
    sqrResult(calc.toFixed(2),"cm²","area","./src/geometry_for_noobs/square.svg");
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
    const sideA = document.getElementById("trg__sideA");
    const sideB = document.getElementById("trg__sideB");
    const base = document.getElementById("trg__base");
    const calc = parseFloat(sideA.value) + parseFloat(sideB.value) + parseFloat(base.value);
    trgResult(calc.toFixed(2),"cm","perimeter","./src/geometry_for_noobs/triangle_perimeter.svg");
}

function triangleHeight() {
    const sideA = parseFloat(document.getElementById("trg__sideA").value);
    const sideB = parseFloat(document.getElementById("trg__sideB").value);
    const base = parseFloat(document.getElementById("trg__base").value);
    let height;
    if (sideA === sideB) {
        height = Math.sqrt((sideA ** 2) - ((base ** 2) / 4));
    } else {
        const semiPer = (sideA + sideB + base) / 2;
        height = (2 / base) * (Math.sqrt(semiPer * (semiPer - base) * (semiPer - sideA) * (semiPer - sideB)));
    }
    trgResult(height.toFixed(2),"cm","height","./src/geometry_for_noobs/triangle_area.svg");
}

function triangleArea() {
    const sideA = parseFloat(document.getElementById("trg__sideA").value);
    const sideB = parseFloat(document.getElementById("trg__sideB").value);
    const base = parseFloat(document.getElementById("trg__base").value);
    let height;
    let calc;
    if (sideA === sideB) {
        height = Math.sqrt((sideA ** 2) - ((base ** 2) / 4));
        calc = (base * height) / 2;
    } else {
        const semiPer = (sideA + sideB + base) / 2;
        height = (2 / base) * (Math.sqrt(semiPer * (semiPer - base) * (semiPer - sideA) * (semiPer - sideB)));
        calc = (1/2) * height * base;
    }
    trgResult(calc.toFixed(2),"cm²","area","./src/geometry_for_noobs/triangle_area.svg");
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
    crlResult(calc.toFixed(2),"cm","perimeter","./src/geometry_for_noobs/circle.svg");
}

function circleArea() {
    const radius = document.getElementById("crl__radius");
    const calc = (radius.value ** 2) * Math.PI;
    crlResult(calc.toFixed(2),"cm²","area","./src/geometry_for_noobs/circle.svg");
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