const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const scaleX = 30;
const scaleY = 10;

ctx.beginPath();
ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
ctx.moveTo(width / 2, 0);
ctx.lineTo(width / 2, height);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.strokeStyle = "red";

for (let x = -10; x <= 10; x += 0.1) {
  const canvasX = width / 2 + x * scaleX;
  const canvasY = height / 2 - (x * x) * scaleY;
  ctx.lineTo(canvasX, canvasY);
}

ctx.stroke();