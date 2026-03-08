import { useEffect, useRef } from 'react';

/**
 * SpiralAnimation Component
 * Creates a subtle spiral animation background using Canvas
 * Design: Modern, elegant spiral that complements the dance theme
 */

export default function SpiralAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let animationId: number;
    let time = 0;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw spiral
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Multiple spiral layers for depth
      for (let layer = 0; layer < 3; layer++) {
        ctx.strokeStyle = `rgba(107, 76, 154, ${0.15 - layer * 0.04})`;
        ctx.lineWidth = 2 - layer * 0.5;

        ctx.beginPath();

        const spiralTurns = 8;
        const points = 1000;

        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2 * spiralTurns + time * 0.5;
          const radius = (i / points) * 300 + layer * 50;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // Add some rotating circles for visual interest
      for (let i = 0; i < 5; i++) {
        const angle = (time * 0.3 + (i / 5) * Math.PI * 2);
        const radius = 150 + i * 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        ctx.fillStyle = `rgba(212, 165, 116, ${0.1 - i * 0.02})`;
        ctx.beginPath();
        ctx.arc(x, y, 20 - i * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      time += 0.01;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
