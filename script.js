document.getElementById('convertBtn').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let convertedTemperature;
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature.');
      return;
    }
  
    if (unitSelect === 'celsius') {
      convertedTemperature = (temperatureInput - 32) * (5/9);
      document.getElementById('result').innerText = `${convertedTemperature.toFixed(2)} °C`;
    } else if (unitSelect === 'fahrenheit') {
      convertedTemperature = (temperatureInput * (9/5)) + 32;
      document.getElementById('result').innerText = `${convertedTemperature.toFixed(2)} °F`;
    } else if (unitSelect === 'kelvin') {
      convertedTemperature = temperatureInput + 273.15;
      document.getElementById('result').innerText = `${convertedTemperature.toFixed(2)} K`;
    }
  });
  