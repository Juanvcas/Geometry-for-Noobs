const people = [];

function addPerson() {
    const personName = document.getElementById("nameValue");
    const nameError = document.getElementById("nameError");
    const personSalary = document.getElementById("salaryValue");
    const salaryError = document.getElementById("salaryError");
    const overhead = document.getElementById("overheadValue");
    const overheadError = document.getElementById("overheadError");
    const savingSalary = document.getElementById("savingValue");
    const savingError = document.getElementById("savingError");

    if (personName.value) {
        nameError.innerText = "";
        if (personSalary.value) {
            salaryError.innerText = "";
            if (overhead.value) {
                overheadError.innerText = "";
                if (savingSalary.value) {
                    savingError.innerText = "";
                    const newPerson = new Person(personName.value,parseFloat(personSalary.value),parseFloat(overhead.value),parseInt(savingSalary.value));
                    people.push(newPerson);
                    addToList(newPerson);
                } else {
                    savingError.innerText = "* Please, insert a saving capacity";
                }
            } else {
                overheadError.innerText = "* Please, insert overheads."
            }
        } else {
            salaryError.innerText = "* Please, insert a salary";
        }
    } else {
        nameError.innerText = "* Please, insert a name";
    }
}

function addToList(person) {
    const peopleList = document.getElementById("people__list");

    const div = document.createElement("div")
    div.innerHTML = 
    `<p>Name: <b>${person.name}.</b></p>
    <p>Salary: <b>${person.salary}$.</b></p>
    <p>Saving Capacity (${person.saving}): <b>${person.savingCapacity()}.</b></p>
    <p>Debt Capacity: <b>${person.debtCapacity()}.</b></p>
    <p>Money Available: <b>${person.totalAvailable()}.</b></p>`;
    peopleList.appendChild(div);
}

function clearList() {
    const personName = document.getElementById("nameValue");
    const personSalary = document.getElementById("salaryValue");
    const personSaving = document.getElementById("savingValue");
    const peopleList = document.getElementById("people__list");

    personName.value = "";
    personSalary.value = "";
    personSaving.value = "";
    peopleList.innerText = "";
    people.splice(0,people.length);
}

function selectSaving() {
    const savingValue = document.getElementById("savingValue");
    const salarySaving = document.getElementById("salarySaving");
    savingValue.value = parseInt(salarySaving.value);
}