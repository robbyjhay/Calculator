const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        if (value === '=') {
            display.value = eval(displayValue);
            displayValue = display.value;
        } 
        
        else if (value === 'C') {
            displayValue = '';
            display.value = '';
        } 
        
        else {
            displayValue += value;
            display.value = displayValue;
        }
    });
});
