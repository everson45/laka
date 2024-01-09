function enviarEncuesta() {
    const pregunta1 = document.getElementById('pregunta1').value;
    const pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
  
    if (pregunta1 && pregunta2) {
      const resultado = `Respuestas:<br>
        Pregunta 1: ${pregunta1}<br>
        Pregunta 2: ${pregunta2.value}`;
      
      document.getElementById('resultado').innerHTML = resultado;
    } else {
      alert('Por favor, responde ambas preguntas.');
    }
  }
  