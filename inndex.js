document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');
    const convertedValue = document.getElementById('convertedValue');
  
    convertButton.addEventListener('click', function() {
      const temperature = parseFloat(temperatureInput.value);
      const unit = unitSelect.value;
  
      if (isNaN(temperature)) {
        result.style.color = 'red';
        convertedValue.innerText = 'Please enter a valid number.';
        return;
      }
  
      result.style.color = '#000';
  
      if (unit === 'celsius') {
        const fahrenheit = (temperature * 9 / 5) + 32;
        convertedValue.innerText = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
      } else {
        const celsius = (temperature - 32) * 5 / 9;
        convertedValue.innerText = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
      }
    });
  });
  