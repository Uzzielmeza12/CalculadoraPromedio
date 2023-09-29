
const form = document.getElementById('Boleta');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const materia1 = parseFloat(document.getElementById('materia1').value);
  const materia2 = parseFloat(document.getElementById('materia2').value);
  const materia3 = parseFloat(document.getElementById('materia3').value);
  const materia4 = parseFloat(document.getElementById('materia4').value);
  const materia5 = parseFloat(document.getElementById('materia5').value);

  const result = (materia1 + materia2 + materia3 + materia4 + materia5) / 5;
  console.log(result);

  const emptyElement = document.getElementById('empty');

  const textElement = document.getElementById('text');


  if (result === 10) {

    emptyElement.innerHTML = '¡Muchas felicidades, serás un gran profesionista!';

  } else if (result > 8) {

    emptyElement.innerHTML = '¡Muchas felicidades, vas por buen camino!';

  } else if (result >= 6) {

    emptyElement.innerHTML = 'Vamos bien, ¡hechale más ganas!';

  } else {

    emptyElement.innerHTML = 'Tu rendimiento es muy bajo';

  }


  textElement.innerHTML = `Tu porcentaje es: ${result}`;
});
