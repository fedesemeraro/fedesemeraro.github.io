// Canvas Animation - Particle Network Effect
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle system
const particles = [];
const particleCount = 80;
const connectionDistance = 150;
const mouseRadius = 200;
const mouse = { x: null, y: null };

// Track mouse movement
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

// Particle class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
  }

  update() {
    // Mouse interaction
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (mouseRadius - distance) / mouseRadius;
        this.vx -= Math.cos(angle) * force * 0.2;
        this.vy -= Math.sin(angle) * force * 0.2;
      }
    }

    // Move particle
    this.x += this.vx;
    this.y += this.vy;

    // Boundary check
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    // Friction
    this.vx *= 0.99;
    this.vy *= 0.99;

    // Keep some minimum movement
    if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.1;
    if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(138, 180, 248, 0.8)'; // Light blue color
    ctx.fill();
  }
}

// Create particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

// Animation loop
function animate() {
  // Clear canvas completely (no trail effect)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        const opacity = (1 - distance / connectionDistance) * 0.5;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(138, 180, 248, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();

// Project Image Particle Overlays
class ProjectParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 30;
    this.connectionDistance = 80;
    this.isAnimating = false;
    this.animationId = null;

    this.resizeCanvas();
    this.initParticles();
    this.setupHoverListeners();
  }

  resizeCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
  }

  setupHoverListeners() {
    const wrapper = this.canvas.closest('.project-image-wrapper') || this.canvas.closest('.project-image-simple');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => this.startAnimation());
      wrapper.addEventListener('mouseleave', () => this.stopAnimation());
    }
  }

  startAnimation() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.animate();
    }
  }

  stopAnimation() {
    this.isAnimating = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  updateParticle(particle) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

    particle.vx *= 0.99;
    particle.vy *= 0.99;

    if (Math.abs(particle.vx) < 0.1) particle.vx += (Math.random() - 0.5) * 0.1;
    if (Math.abs(particle.vy) < 0.1) particle.vy += (Math.random() - 0.5) * 0.1;
  }

  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(138, 180, 248, 0.8)';
    this.ctx.fill();
  }

  animate() {
    if (!this.isAnimating) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      this.updateParticle(particle);
      this.drawParticle(particle);
    });

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = (1 - distance / this.connectionDistance) * 0.5;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(138, 180, 248, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Initialize particle systems for all project canvases
document.querySelectorAll('.project-canvas-overlay').forEach(canvas => {
  new ProjectParticleSystem(canvas);
});

// Handle window resize for project canvases
window.addEventListener('resize', () => {
  document.querySelectorAll('.project-canvas-overlay').forEach(canvas => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  });
});

// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
  observer.observe(el);
});

// PDF Modal Functions
function openPdfModal() {
  document.getElementById('pdfModal').classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePdfModal() {
  document.getElementById('pdfModal').classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePdfModal();
});

// Close modal on click outside (after DOM is loaded)
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('pdfModal').addEventListener('click', (e) => {
    if (e.target.id === 'pdfModal') {
      closePdfModal();
    }
  });
});
