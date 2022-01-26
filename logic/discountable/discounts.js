// Mi forma de crear los cupones
let coupons = [
    {cupDiscount: 20,cupAmount: 5},
    {cupDiscount: 15,cupAmount: 5},
    {cupDiscount: 10,cupAmount: 10},
    {cupDiscount: 5,cupAmount: 15},
];

const selectCoupon = function() {
    const coupSelect = document.getElementById("coupons");
    let coupActive;
    switch (parseInt(coupSelect.value)) {
        case 20:
            coupActive = coupons[0];
            applyCoupon(coupActive);
        break;
        case 15:
            coupActive = coupons[1];
            applyCoupon(coupActive);
        break;
        case 10:
            coupActive = coupons[2];
            applyCoupon(coupActive);
        break;
        case 5:
            coupActive = coupons[3];
            applyCoupon(coupActive);
        break;
    }
    return coupActive;
}

function applyCoupon(coupon) {
    const disctInput = document.getElementById("discount");
    const cupExistences = document.getElementById("cupExistences");
    const result = document.getElementById("result");
    if (parseInt(coupon.cupAmount) >= 1) {
        disctInput.value = coupon.cupDiscount;
        cupExistences.innerText = ``;
        result.innerText = ``;
    } else {
        disctInput.value = 0;
        cupExistences.innerHTML = `Sorry, there are no more ${coupon.cupDiscount}% coupons.`
    }
}

// Mi forma de hacer el descuento.
function discounts(coupon) {
    console.log(coupon);
    const price = parseFloat(document.getElementById("price").value);
    const discount = parseFloat(document.getElementById("discount").value);
    const result = document.getElementById("result");

    if (price) {
        trueValue.innerText = ``;
        if (coupon) {
            if (coupon.cupAmount >= 1) {
                const calc = price * (1 - (discount * 0.01));
                result.innerHTML = 
                `
                <h3>Price with discount</h3>
                <p>The real price is: <b>$${calc.toFixed(2)}</b> with a <b>${discount}%</b> discount.</p>
                `;
                coupon.cupAmount--;
            } else {
                result.innerText = "Sorry, this coupon is not valid."
            }
        } else {
            result.innerText = "Please, select a coupon."
        }
    } else {
        trueValue.innerText = "* Please, insert a valid value."
    }
}
