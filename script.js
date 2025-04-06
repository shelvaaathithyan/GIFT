// Reveal video on button click
const revealBtn = document.getElementById('revealBtn');
const videoContainer = document.getElementById('videoContainer');

revealBtn.addEventListener('click', () => {
  videoContainer.style.display = 'block';
  revealBtn.style.display = 'none';
});

// Randomly position scattered photos
const scatteredImgs = document.querySelectorAll('.scatter-img');

scatteredImgs.forEach(img => {
  const top = Math.random() * 75 + 5;   // 5% to 80%
  const left = Math.random() * 80 + 5;  // 5% to 85%
  const rotate = (Math.random() * 30 - 15); // -15deg to +15deg

  img.style.top = `${top}%`;
  img.style.left = `${left}%`;
  img.style.transform = `rotate(${rotate}deg)`;
});

// Sparkle background animation
const canvas = document.getElementById("sparkleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

for (let i = 0; i < 80; i++) {
  sparkles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animateSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sparkles.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffb6c1";
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;

    if (s.x < 0 || s.x > canvas.width) s.dx = -s.dx;
    if (s.y < 0 || s.y > canvas.height) s.dy = -s.dy;
  });

  requestAnimationFrame(animateSparkles);
}

animateSparkles();
