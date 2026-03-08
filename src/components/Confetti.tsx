import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  color: string;
}

interface ConfettiProps {
  trigger: boolean;
}

export function Confetti({ trigger }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!trigger) return;

    const colors = ['#C4848A', '#F0E0C8', '#D4AF37', '#FAF7F5'];
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
    }, 2700);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="confetti"
          style={{
            left: `${particle.left}%`,
            top: '-10px',
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            borderRadius: '50%',
          }}
        />
      ))}
    </>
  );
}
