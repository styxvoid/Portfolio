import { useEffect, useRef } from 'react';

// Mix of katakana + digits + special chars — classic Matrix feel
const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノ' +
  'ハヒフヘホマミムメモヤユヨラリルレロワヲン' +
  '0123456789ABCDEF<>/\\|{}[]!@#$%^&*';

interface MatrixRainProps {
  opacity?: number;
  fontSize?: number;
}

export function MatrixRain({ opacity = 0.28, fontSize = 14 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols: number[] = [];
    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const colCount = Math.floor(canvas.width / fontSize);
      cols = Array.from({ length: colCount }, () =>
        Math.floor(Math.random() * (canvas.height / fontSize))
      );
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      // Translucent black fill — creates the fade / trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'VT323', monospace`;

      cols.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;

        // Bright head character
        ctx.fillStyle = '#00ff88';
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = 6;
        ctx.fillText(char, x, y * fontSize);

        // Occasionally drop a dim secondary char just above the head
        if (y > 1 && Math.random() > 0.7) {
          const prevChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillStyle = 'rgba(0,200,100,0.4)';
          ctx.shadowBlur = 0;
          ctx.fillText(prevChar, x, (y - 1) * fontSize);
        }

        ctx.shadowBlur = 0;

        // Reset column after it exits the screen
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          cols[i] = 0;
        }
        cols[i]++;
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [fontSize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: 0,
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
}
