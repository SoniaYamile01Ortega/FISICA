window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('distanceChart');
  const ctx = canvas.getContext('2d');

  const timeData = [0, 1, 2, 3, 4]; // Datos de tiempo
  const distanceData = [0, 4, 16, 36, 64]; // Datos de distancia

  // Crear el gráfico
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: timeData,
      datasets: [{
        label: 'Distancia',
        data: distanceData,
        borderColor: 'blue',
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tiempo (s)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Distancia (m)'
          }
        }
      }
    }
  });
});
