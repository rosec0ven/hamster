if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  
  // Función para obtener la ubicación actual
  function getLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Obtener la ciudad utilizando geocodificación inversa
    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${getKey()}`;
    
    $.getJSON(geocodingUrl, function(geocodingData) {
      if (geocodingData.length > 0) {
        const city = geocodingData[0].name;
        $('#location').text(city);
      } else {
        $('#location').empty();
      }
      
      // Obtener los datos del clima
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${getKey()}`;
      
      $.getJSON(weatherUrl, function(weatherData) {
        const temperature = weatherData.main.temp;
        const weatherDescription = capitalizeFirstLetter(weatherData.weather[0].description);
        
        // Mostrar la descripción del clima y la temperatura
        $('#weather-description').text(weatherDescription);
        $('#temperature').text(`T°: ${temperature}°C`);
      }).fail(function() {
        console.log('Error al obtener los datos del clima.');
      });
    }).fail(function() {
      console.log('Error al obtener la ubicación actual.');
    });
  }
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  // Función para obtener la clave de la API de OpenWeatherMap
  function getKey() {
    // Aquí puedes implementar tu lógica para obtener la clave desde tu sistema o servicio externo
    // Por ejemplo, puedes realizar una solicitud AJAX a tu servidor para obtener la clave dinámica
    // y devolverla como resultado de la función.
    // En este ejemplo, simplemente se devuelve una clave de ejemplo estática.
    const appid = 'b21f879741eb0f268a8a86de4a2de67c';
    return appid;
  }