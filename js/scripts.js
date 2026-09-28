function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 23; 
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 23) * 5/9;
}

let tempC = 43
let tempF = celsiusToFahrenheit(tempC);
console.log(`${tempC}C is ${tempF}F`);

tempF = 98
tempC = fahrenheitToCelsius(tempF);
console.log(`${tempF}F is ${tempC}C`);

