
window.onload = () => {

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('input[name="sorter"]:checked').value;
    const color = value.toLowerCase();
if (color === 'blue') {
    setColor("blueBackground");
    showChoice(value);
} else if (color === 'green') {
    setColor("greenBackground");
    showChoice(value);
} else if (color === 'red') {
    setColor("redBackground");
    showChoice(value);
} else if (color === 'purple') {
    setColor("purpleBackground");
    showChoice(value);
} else if (color === 'yellow') {
    setColor("yellowBackground");
    showChoice(value);
};

const myForm = document.getElementById('sort-type');

let currentClass = null;

const setColor = (className) => {
    console.log("SET CLASS TO", className);
    var element = document.getElementById("form-section");
    if (currentClass) {
        element.classList.remove(currentClass);        
    }
    currentClass = className;
    element.classList.add(className);
};
