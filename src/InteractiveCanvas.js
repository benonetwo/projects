import React, { useEffect, useRef } from "react";
import "./InteractiveCanvas.css";

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 200; // Number of particles

    const mouse = {
      x: undefined,
      y: undefined,
      isActive: false, // Indicates if mouse is hovering or not
    };

    // Update mouse position
    const updateMousePosition = (event) => {
      if (event.type === "mousemove") {
        mouse.x = event.x;
        mouse.y = event.y;
        mouse.isActive = true;
      } else if (event.type === "touchmove") {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
        mouse.isActive = true;
      }
    };

    // Reset mouse activity status
    const resetMouseActivity = () => {
      mouse.isActive = false;
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition);
    window.addEventListener("mouseleave", resetMouseActivity);
    window.addEventListener("touchend", resetMouseActivity);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Particle {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.baseX = this.x;
        this.baseY = this.y;
        this.color = "rgba(255, 255, 255, 0.8)";
        this.density = Math.random() * 30 + 1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (mouse.isActive) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          if (distance < maxDistance) {
            this.x -= directionX;
            this.y -= directionY;
          } else {
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / 10;
            }
          }
        } else {
          // Smooth return to base position when mouse is not active
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }

        this.draw();
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y, size));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      window.removeEventListener("mouseleave", resetMouseActivity);
      window.removeEventListener("touchend", resetMouseActivity);
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-canvas"></canvas>;
};

export default InteractiveCanvas;
