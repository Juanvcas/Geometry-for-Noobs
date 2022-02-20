class Person {
    constructor(name,salary,overheads,saving) {
        this.name = name;
        this.salary = salary;
        this.overheads = overheads;
        this.saving = saving;
    }
    savingCapacity() {
        const savingCap = this.salary * (this.saving / 100);
        if (savingCap + this.overheads > this.salary) {
            const result = "The saving capacity overtakes the overheads.";
            return result;
        } else {
            return savingCap;
        }
    }

    debtCapacity() {
        const debtCap = (this.salary - this.overheads) * 0.35;
        if (typeof this.savingCapacity() == "number") {
            if (debtCap > this.savingCapacity()) {
                const totalDebtCap = debtCap - this.savingCapacity();
                if (debtCap - totalDebtCap <= 0) {
                    const result = "There is no enough to debt capacity";
                    return result;
                } else {
                    return (debtCap - totalDebtCap).toFixed(2);
                }
            } else {
                return debtCap.toFixed(2);
            }
        } else {
            return debtCap.toFixed(2);
        }
    }

    totalAvailable() {
        const avaliable = this.salary - this.overheads;
        if (typeof this.savingCapacity() == "number") {
            return `${avaliable - this.savingCapacity()}$ without Debts`;
        } else {
            return `${avaliable}$ without Savings and Debts`
        }
    }
}