const noButton = document.getElementById('no');
const siButton = document.getElementById('si');
const siButtons = document.getElementById('so');
const siButtonsd = document.getElementById('su');
const siButtonsf = document.getElementById('sa');

noButton.addEventListener('mouseover', () => {
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.floor(Math.random() * (window.innerWidth - 100))}px`;
  noButton.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
});

siButton.addEventListener('click', () => {
  window.location.href = 'otraPagina.html';
});
siButtons.addEventListener('click', () => {
  window.location.href = 'otraPagina.html';
});
siButtonsd.addEventListener('click', () => {
  window.location.href = 'otraPagina.html';
});
siButtonsf.addEventListener('click', () => {
  window.location.href = 'otraPagina.html';
});



function mostrarImagen(ruta) {
  var modal = document.getElementById("myModal");
  var img = document.getElementById("imagen");
  img.src = ruta;
  modal.style.display = "block";

  var cerrar = document.getElementsByClassName("cerrar")[0];
  cerrar.onclick = function() {
    modal.style.display = "none";
  }
}
