const geoValues = [];

function addGeoValues() {
    const inpValues = document.getElementById("geo__inp");
    const inpError = document.getElementById("geo__error");
    const inpList = document.getElementById("geo__values");
    if (inpValues.value) {
        geoValues.push(inpValues.value);
        if (geoValues.length === 1) {
            inpList.innerHTML = 
            `<h3>Here is the percentage</h3>
            <p>The value is: <b>${geoValues}.</b></p>`;
            inpValues.value = "";
            inpError.innerHTML = "";
        } else {
            inpList.innerHTML = 
            `<h3>Here are the percentages</h3>
            <p>The values are: <b>${geoValues}.</b></p>`;
            inpValues.value = "";
            inpError.innerHTML = "";
        }
    } else {
        inpError.innerText = "* Plese, insert a valid value.";
    }
    console.log(geoValues)
}

function clearGeoValues() {
    const inpValues = document.getElementById("geo__inp");
    const inpList = document.getElementById("geo__values");
    geoValues.slice(0,geoValues.length);
    inpValues.value = "";
    inpList.innerHTML = "";
}

function geoMean() {
    const percentages = [];
    geoValues.map(function(value){
        num = parseFloat(value)
        if (num === 0) {
            value = 1;
            percentages.push(num);
        } else if (num < 0) {
            percent = num / 100;
            rest = 1 + percent;
            console.log(percent,rest)
            percentages.push(rest);
        } else {
            percent = (num / 100) + 1;
            percentages.push(percent);
        }
    });
    const totalPercentages = percentages.reduce(function(total,iteration){return total * iteration});
    return Math.pow(totalPercentages,1/percentages.length);
}

function geoResult() {
    const resultOutput = document.getElementById("geo__result");
    const resultError = document.getElementById("geoCalc__error");

    if (geoValues.some(function(value){return value})) {
        if (geoMean() >= 1) {
            const result = parseFloat((geoMean() - 1) * 100).toFixed(2);
            resultOutput.innerHTML = 
            `
            <h3>The rentability is:</h3>
            <p>An increase of: <b>${result}%</b></p>
            `;
        } else {
            const result = parseFloat((1 - geoMean()) * 100).toFixed(2);
            resultOutput.innerHTML = 
            `
            <h3>The rentability is:</h3>
            <p>An decrease of: <b>${result}%</b></p>
            `;
        }
    } else {
        resultError.innerText = "* Please, insert a valid value";
    }
}