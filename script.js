const temp = document.querySelector('h1+p:nth-child(2)>span');
let celcius = Number(temp.textContent);
const fahrenheit = (9/5 * celcius) + 32;
const kelvin = celcius + 273.15;
const reamur = celcius + (4/5);

const fahText = document.querySelector(`h1+p+p:nth-child(3)>span`);
fahText.textContent = fahrenheit;
const kelText= document.querySelector('body>p:nth-child(4)>span');
kelText.textContent = kelvin;
const reText= document.querySelector('body>p:nth-child(5)>span');
reText.textContent = reamur;