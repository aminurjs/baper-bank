

function getInput(element){
    const inputField = document.getElementById(element);
    const inputString = inputField.value;
    const input = parseFloat(inputString);
    inputField.value = '';
    return input;
}
function getText(element){
    const textField = document.getElementById(element);
    const textString = textField.innerText;
    const text = parseFloat(textString);
    return text;
}
function setText(element, newValue){
    const setElement = document.getElementById(element);
    setElement.innerText = newValue;
}
