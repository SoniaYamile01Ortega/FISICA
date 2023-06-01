window.addEventListener('DOMContentLoaded', (event) => {
    // Variables
    const canvas = document.getElementById('carSimulation');
    const ctx = canvas.getContext('2d');
    const carWidth = 50;
    const carHeight = 30;
    const acceleration = 4; // Aceleración en m/s²
    const accelerationTime = 4; // Tiempo de aceleración en segundos
    const uniformTime = 10; // Tiempo de movimiento uniforme en segundos
    const deceleration = -8; // Deceleración en m/s²
    const totalTime = accelerationTime + uniformTime + accelerationTime;
  
    let position = 0; // Posición inicial del automóvil
    let velocity = 0; // Velocidad inicial del automóvil
    let time = 0; // Tiempo inicial
  
    // Función de actualización
    function update() {
      // Calcula la posición en función del tiempo
      if (time <= accelerationTime) {
        // Fase de aceleración
        position = 0.25 * acceleration * Math.pow(time, 2);
        velocity = acceleration * time;
      } else if (time <= accelerationTime + uniformTime) {
        // Fase de movimiento uniforme
        position = displacement1 + velocity * (time - accelerationTime);
        velocity = acceleration * accelerationTime;
      } else if (time <= totalTime) {
        // Fase de deceleración
        const decelerationTime = time - (accelerationTime + uniformTime);
        position = displacement1 + displacement2 + velocity * decelerationTime + 0.25 * deceleration * Math.pow(decelerationTime, 2);
        velocity = acceleration * accelerationTime + deceleration * decelerationTime;
      }
  
      // Limpia el lienzo
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Dibuja el automóvil en la posición actual
      ctx.fillRect(position, canvas.height - carHeight, carWidth, carHeight);
  
      // Incrementa el tiempo
      time += 0.1;
  
      // Detiene la simulación cuando se alcanza el tiempo total
      if (time > totalTime) {
        clearInterval(interval);
      }
    }
  
    // Inicia la simulación
    const interval = setInterval(update, 100); // Actualiza cada 0.1 segundos (100 milisegundos)
  });
  