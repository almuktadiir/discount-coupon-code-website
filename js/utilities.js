
//get element text
function getElementText(textId){
    const element = document.getElementById(textId).innerText;
    return element;
}

// get button
function btnInfo(btnId) {
    const btn = document.getElementById(btnId);
    return btn;
}

// get element value 
function getElementValue(elementId) {
    const element = document.getElementById(elementId).innerText;
    const elementValue = parseFloat(element);
    return elementValue;
}

// set element value
function setElement(id, value) {
    const setElement = document.getElementById(id);
    setElement.innerText = value;
}

// calculation & name set
function addToCalculationEntry(areaType){
    // console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('purchase-item');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2', 'text-2xl', 'font-medium');
    p.innerHTML = `${count + 1}. ${areaType}`;
    calculationEntry.appendChild(p);
}

// apply btn
function btnApply() {
    const btnApply = btnInfo('btn-apply');
    if (sum > 0) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', true)
    }
}

// purchase btn
function btnPurchase() {
    const btn = btnInfo('btn-purchase');
    if (sum > 0) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', true)
    }
}

// modal btn
function btnModal() {
    const modal = document.getElementById('btn-modal');
    modal = window.location.replace("index.html")
}