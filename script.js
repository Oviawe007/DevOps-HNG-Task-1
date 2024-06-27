const button = document.getElementById('change-color');

button.addEventListener('click', function() {
  const body = document.body;
  const newColor = body.style.backgroundColor === 'lightgray' ? '#333' : 'lightgray';
  body.style.backgroundColor = newColor;
});
