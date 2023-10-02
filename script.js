function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");

    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    var kelvin = celsius + 273.15;

    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
}

function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");

    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    var kelvin = celsius + 273.15;

    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
}
