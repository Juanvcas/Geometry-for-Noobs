const modaValues = [];
// investigar "split()"

function addModaValues() {
    const inpValues = document.getElementById("moda__inp");
    const inpError = document.getElementById("moda__error");
    const inpList = document.getElementById("moda__values");
    if (inpValues.value) {
        modaValues.push(inpValues.value);
        if (modaValues.length === 1) {
            inpList.innerHTML = 
            `<h3>Here is the value</h3>
            <p>The value is: <b>${modaValues}.</b></p>`;
            inpValues.value = "";
            inpError.innerHTML = "";
        } else {
            inpList.innerHTML = 
            `<h3>Here are the values</h3>
            <p>The values are: <b>${modaValues}.</b></p>`;
            inpValues.value = "";
            inpError.innerHTML = "";
        }
    } else {
        inpError.innerText = "* Plese, insert a valid value.";
    }
}

function clearModaValues() {
    const inpValues = document.getElementById("moda__inp");
    const inpList = document.getElementById("moda__values");
    modaValues.slice(0,modaValues.length);
    inpValues.value = "";
    inpList.innerHTML = "";
}

function moda() {
    let totalValues = [];
    let iteration = 0;
    for (i of modaValues) {
        const ifRepeat = totalValues.some(function(item){return item.value === i})
        if (!ifRepeat) {
            let quantity = 0;
            for (iv = 0;iv < modaValues.length;iv++) {
                if (modaValues[iv] === i) {
                    totalValues[iteration] = {value:modaValues[iv],amount:quantity + 1};
                    quantity++;
                }
            }
            iteration++;
        }
    }
    return totalValues;
}

function modaResult() {
    const resultOutput = document.getElementById("moda__result");
    const resultError = document.getElementById("modaCalc__error");

    const sortValues = moda().sort(function(a,b){return b.amount - a.amount});
    console.log(sortValues);
    if (sortValues.length >= 1) {
        resultOutput.innerHTML = `<h3>List of Elements</h3>`;
        for (i = 0;i < sortValues.length;i++) {
            if (i === 0) {
                const div = document.createElement("div");
                div.className = "values";
                div.innerHTML = `<p>The <b>Moda</b> element is: <b>${sortValues[i].value}</b>, with <b>${sortValues[i].amount}</b> repeats</p>`;
                resultOutput.appendChild(div);
                resultError.innerText = "";
            } else {
                const div = document.createElement("div");
                div.className = "values";
                div.innerHTML = `<p>The next element is: <b>${sortValues[i].value}</b>, with <b>${sortValues[i].amount}</b> repeats</p>`;
                resultOutput.appendChild(div);
                resultError.innerText = "";
            }
        }
    } else {
        resultError.innerText = "* Sorry, there are no values to calculate.";
    }
}