function updateDateTime() {
    $.getJSON('http://worldtimeapi.org/api/ip', function(data) {
      const datetime = new Date(data.datetime);
      const currentDate = datetime.toLocaleDateString('es-ES');
      const currentTime = datetime.toLocaleTimeString('es-ES');
    
      // Mostrar la fecha y la hora en los div correspondientes
      $('#date').text(currentDate);
      $('#time').text(currentTime);
    }).fail(function() {
      console.log('Error al obtener los datos de hora y fecha.');
    });
  }
  
  // Actualizar la fecha y la hora cada segundo (1000 ms)
  setInterval(updateDateTime, 1000);
  