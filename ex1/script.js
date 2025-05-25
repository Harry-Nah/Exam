document.getElementById("quadratic-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const result = document.getElementById("result");

  const delta = b * b - 4 * a * c;

  if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    result.textContent = `Deux solutions: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
  } else if (delta === 0) {
    const x = -b / (2 * a);
    result.textContent = `Une solution double: x = ${x.toFixed(2)}`;
  } else {
    result.textContent = `Pas de solution réelle`;
  }
});