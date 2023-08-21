let sum = 0;
document.getElementById('btn-apply').addEventListener('click', function () {
    const couponField = document.getElementById('coupon').value;
    if (sum >= 200 && couponField === 'SELL200') {
        const discount = (sum * .20).toFixed(2);
        setElement('discount', discount);
        const finalTotal = sum - discount;
        setElement('final-price', finalTotal);
    }else{
        alert('please enter valid coupon code & buy something at least 200 Tk or more');
        return;
    }
})

function cardItem1(element) {
    const textElement = element.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
    addToCalculationEntry(textElement);
    const getPrice = element.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(' ')[0];
    sum = parseFloat(sum) + parseFloat(getPrice);
    setElement('total-price', sum);
    btnApply();
    btnPurchase();
}

function cardItem2(element) {
    const textElement = element.parentNode.childNodes[7].childNodes[3].childNodes[3].innerText;
    addToCalculationEntry(textElement);
    const getPrice = element.parentNode.childNodes[7].childNodes[3].childNodes[5].innerText.split(' ')[0];
    sum = parseFloat(sum) + parseFloat(getPrice);
    setElement('total-price', sum);
    btnApply();
    btnPurchase();
}

function cardItem3(element) {
    const textElement = element.parentNode.childNodes[11].childNodes[3].childNodes[3].innerText;
    addToCalculationEntry(textElement);
    const getPrice = element.parentNode.childNodes[11].childNodes[3].childNodes[5].innerText.split(' ')[0];
    sum = parseFloat(sum) + parseFloat(getPrice);
    setElement('total-price', sum);
    btnApply();
    btnPurchase();
}

function cardItem4(element) {
    const textElement = element.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
    addToCalculationEntry(textElement);
    const getPrice = element.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(' ')[0];
    sum = parseFloat(sum) + parseFloat(getPrice);
    setElement('total-price', sum);
    btnApply();
    btnPurchase();
}

function cardItem5(element) {
    const textElement = element.parentNode.childNodes[7].childNodes[3].childNodes[3].innerText;
    addToCalculationEntry(textElement);
    const getPrice = element.parentNode.childNodes[7].childNodes[3].childNodes[5].innerText.split(' ')[0];
    sum = parseFloat(sum) + parseFloat(getPrice);
    setElement('total-price', sum);
    btnApply();
    btnPurchase();
}

function cardItem6(element) {
    const textElement = element.parentNode.childNodes[11].childNodes[3].childNodes[3].innerText;
    addToCalculationEntry(textElement);
    const getPrice = element.parentNode.childNodes[11].childNodes[3].childNodes[5].innerText.split(' ')[0];
    sum = parseFloat(sum) + parseFloat(getPrice);
    setElement('total-price', sum);
    btnApply();
    btnPurchase();
}


