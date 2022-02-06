const values = [];

function addAvgValues() {
    const inputValue = document.getElementById("arth__inp");
    const valuesList = document.getElementById("arth__values");
    const inpError = document.getElementById("arth__error");

    if (inputValue.value) {
        values.push(parseFloat(inputValue.value));
        valuesList.innerHTML = 
        `
        <h3>list of values:</h3>
        <p>The values are: <b>${values}</b></p>
        `;
        inputValue.value = "";
        inpError.innerText = "";
    } else {
        inpError.innerText = "* Please, insert a valid value";
    }
}

function cleanAvgValues() {
    const inputValue = document.getElementById("arth__inp");
    const valuesList = document.getElementById("arth__values");
    values.splice(0,values.length);
    inputValue.value = "";
    valuesList.innerText = "";
}

function average() {
    const resultSect = document.getElementById("arth__result");
    const resulrError = document.getElementById("calc__error");
    let sumValues = 0;
    if (values[0]) {
        for (i of values) {
            sumValues = sumValues + i;
        }
        const average = sumValues / values.length;
        resultSect.innerHTML = 
        `
        <h3>Here is your result:</h3>
        <p>The average is: <b>${average.toFixed(2)}</b></p>
        `;
        resulrError.innerText = "";
    } else {
        resulrError.innerText = "* There are no values to calculate average."
    }
}