document.addEventListener("DOMContentLoaded", () => {
  const bloque = document.getElementById("mg-1");
  const logo = document.getElementById("logo");
  const posicionInicial = 10;  // Posición inicial en px
  const desplazamiento = 200;  // Distancia a moverse en px
  let posicionActual = posicionInicial; //variable que cambia su valor 
  let destino = posicionInicial; // varible que cambia a que  lugar quiere ir a 10px o 210 px
  let animacionActiva = false; // verifica si  se puede ejecutar el codigo

  function animar() {
    if (!animacionActiva) return; // esto la ! cambia la animacionActiva = true por lo que  la primera condiconal se ejecuta y no la segunda
 
    // Suaviza el movimiento usando interpolación
    posicionActual += (destino - posicionActual) * 0.1; // Ajusta el 0.1 para cambiar la velocidad. La posicion actual cambia constantemente ejemplo en la primera ejecución sería 10 + 20 y al final toma el valor de 30

    // Si la diferencia es menor a 0.5, se detiene la animación
    if (Math.abs(destino - posicionActual) < 0.5) {
      posicionActual = destino;// aqui depende de que destino estamos hablando puede ser de inicio o fin 10px o 210px
      animacionActiva = false; // Detiene la animación
    }

    bloque.style.left = posicionActual + "px"; //vendria ser lo más importante ya que aqui es como se mueve el bloque
    requestAnimationFrame(animar);//animacion más fluida 
  }

  bloque.addEventListener("mouseenter", () => {
    destino = posicionInicial + desplazamiento; // Mueve a la derecha
    if (!animacionActiva) {
      animacionActiva = true;
      animar();
    }
  });
  logo.addEventListener("mouseenter", () => {
    destino = posicionInicial + desplazamiento; // Mueve a la derecha
    if (!animacionActiva) {
      animacionActiva = true;
      animar();
    }
  });

  bloque.addEventListener("mouseleave", () => {
    destino = posicionInicial; // Vuelve a la posición inicial
    if (!animacionActiva) {
      animacionActiva = true;
      animar();
    }
  });
});


