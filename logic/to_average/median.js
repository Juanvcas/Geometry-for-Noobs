const medValues = [];

function addMedValues() {
    const inputValue = document.getElementById("med__inp");
    const valuesList = document.getElementById("med__values");
    const inpError = document.getElementById("med__error");

    if (inputValue.value) {
        medValues.push(parseFloat(inputValue.value));
        valuesList.innerHTML = 
        `
        <h3>list of values:</h3>
        <p>The values are: <b>${medValues}</b></p>
        `;
        inputValue.value = "";
        inpError.innerText = "";
    } else {
        inpError.innerText = "* Please, insert a valid value";
    }
}

function cleanMedValues() {
    const inputValue = document.getElementById("med__inp");
    const valuesList = document.getElementById("med__values");
    medValues.splice(0,medValues.length);
    inputValue.value = "";
    valuesList.innerText = "";
}

function median() {
    const resultSect = document.getElementById("med__result");
    const resulrError = document.getElementById("medCalc__error");
    let orderValues = medValues;
    if (medValues[0]) {
        for (i of orderValues) {
            for (i = 0; i < orderValues.length; i++) {
                if (orderValues[i] > orderValues[i + 1]) {
                    const v = orderValues[i];
                    orderValues[i] = orderValues[i + 1];
                    orderValues[i + 1] = v;
                }
            }
        }
        if (orderValues.length % 2) {
            const index = (orderValues.length / 2) - 0.5;
            const median = orderValues[index];
            resultSect.innerHTML = 
            `
            <h3>Here is your result:</h3>
            <p>The median is: <b>${median.toFixed(2)}</b></p>
            `;
            resulrError.innerText = "";
        } else {
            const index = orderValues.length / 2;
            const median = (orderValues[index] + (orderValues[index - 1])) / 2;
            resultSect.innerHTML = 
            `
            <h3>Here is your result:</h3>
            <p>The median is: <b>${median.toFixed(2)}</b></p>
            `;
            resulrError.innerText = "";
        }
    } else {
        resulrError.innerText = "* There are no values to calculate average.";
    }
}