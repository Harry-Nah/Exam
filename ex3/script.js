function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(articleId) {
  const article = document.getElementById(articleId);
  const newColor = getRandomColor();
  article.style.backgroundColor = newColor;
  console.log(`Couleur de ${articleId} changée en ${newColor}`);
}