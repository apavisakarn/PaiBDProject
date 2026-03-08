import { useState } from 'react';

interface FlipCardProps {
  number: number;
  reason: string;
  onFlip: (isFlipped: boolean) => void;
  initialFlipped?: boolean;
}

export function FlipCard({ number, reason, onFlip, initialFlipped = false }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(initialFlipped);

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      onFlip(true);
    }
  };

  const colors = number % 2 === 0 ? 'from-dusty-rose to-champagne' : 'from-champagne to-dusty-rose';

  return (
    <div
      className="card-container h-40 sm:h-48 md:h-56 cursor-pointer"
      onClick={handleClick}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className={`card-face card-front bg-gradient-to-br ${colors} rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center gap-3`}>
          <div className="sparkle">✨</div>
          <div className="text-3xl sm:text-4xl md:text-5xl">💕</div>
          <p className="text-sm sm:text-base font-nunito font-semibold text-white opacity-90">
            #{number}
          </p>
        </div>

        <div className="card-face card-back bg-ivory rounded-2xl shadow-lg p-4 sm:p-6 flex items-center justify-center">
          <p className="font-mitr text-center text-sm sm:text-base md:text-lg text-dusty-rose leading-relaxed">
            {reason}
          </p>
        </div>
      </div>
    </div>
  );
}
