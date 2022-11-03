const file = document.getElementById('fileImg');

file.addEventListener('change', (e) => {
  const reader = new FileReader();

  reader.onload = () => {};
});

module.exports = { file, reader };
