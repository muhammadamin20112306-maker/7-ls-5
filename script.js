const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = " Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});

 
const searchInput = document.getElementById('search');
const boxes = document.querySelectorAll('.box__perent div');

searchInput.addEventListener('input', function () {
  const qidiruv = this.value.toLowerCase().trim();

  boxes.forEach(box => {
    const country = box.querySelector('p').textContent.toLowerCase();
    if (country.includes(qidiruv)) {
      box.style.display = 'block';  // mos keladi
    } else {
      box.style.display = 'none';   // mos kelmaydi
    }
  });
});
