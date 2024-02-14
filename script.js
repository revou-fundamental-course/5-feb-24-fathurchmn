document.addEventListener("DOMContentLoaded", function() {
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function updateExplanation(celsiusInput, fahrenheitInput) {
        var explanationText = "";
        if (celsiusInput !== "") {
            explanationText = celsiusInput + "°C * (9/5) + 32 = " + celsiusToFahrenheit(parseFloat(celsiusInput)).toFixed(2) + "°F";
        } else if (fahrenheitInput !== "") {
            explanationText = "(" + fahrenheitInput + "°F - 32) * 5/9 = " + fahrenheitToCelsius(parseFloat(fahrenheitInput)).toFixed(2) + "°C";
        }
        document.getElementById("cara-kalkulasi").value = explanationText;
    }

    document.getElementById("convert").addEventListener("click", function() {
        var celsiusInput = document.getElementById("celsius").value;
        var fahrenheitInput = document.getElementById("fahrenheit").value;

        if (celsiusInput !== "") {
            var fahrenheitOutput = celsiusToFahrenheit(parseFloat(celsiusInput));
            document.getElementById("fahrenheit").value = fahrenheitOutput.toFixed(2);
        } else if (fahrenheitInput !== "") {
            var celsiusOutput = fahrenheitToCelsius(parseFloat(fahrenheitInput));
            document.getElementById("celsius").value = celsiusOutput.toFixed(2);
        }

        updateExplanation(celsiusInput, fahrenheitInput);
    });

    document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("celsius").value = "";
        document.getElementById("fahrenheit").value = "";
        document.getElementById("cara-kalkulasi").value = "";
    });

    document.getElementById("reverse").addEventListener("click", function() {
        var celsiusInput = document.getElementById("celsius").value;
        var fahrenheitInput = document.getElementById("fahrenheit").value;

        document.getElementById("celsius").value = fahrenheitInput;
        document.getElementById("fahrenheit").value = celsiusInput;

        updateExplanation(fahrenheitInput, celsiusInput);
    });
});
