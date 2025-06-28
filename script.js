let current = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000); // cambia cada 3 segundos


emailjs.init('kVa0QMz6RSEhc8o6x');

const boton = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(evento) {
  evento.preventDefault();
  boton.value = 'Enviando...';

  const serviceID = 'service_4andu46';
  const templateID = 'template_751kd4j';

  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      boton.value = 'Enviar mensaje';
      alert('Mensaje enviado con éxito');
    }, (error) => {
      boton.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});