import { useState, useEffect } from 'react';
import { FlipCard } from './components/FlipCard';
import { Confetti } from './components/Confetti';
import { reasons } from './data/reasons';

function App() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('flippedCards');
    if (saved) {
      try {
        setFlippedCards(new Set(JSON.parse(saved)));
      } catch {
        setFlippedCards(new Set());
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('flippedCards', JSON.stringify(Array.from(flippedCards)));
  }, [flippedCards]);

  const handleCardFlip = (cardNumber: number) => {
    const newFlipped = new Set(flippedCards);
    newFlipped.add(cardNumber);
    setFlippedCards(newFlipped);

    if (cardNumber === 28 && !flippedCards.has(28)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2700);
    }
  };

  const openedCount = flippedCards.size;

  return (
    <div className="min-h-screen bg-ivory overflow-hidden">
      <Confetti trigger={showConfetti} />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="font-mitr text-3xl sm:text-4xl md:text-5xl font-bold text-dusty-rose mb-2 sm:mb-3">
            28 เหตุผลที่รักปาย
          </h1>
          <p className="font-nunito text-base sm:text-lg md:text-xl text-dusty-rose opacity-80 mb-6 sm:mb-8">
            28 Reasons I Love You 💕
          </p>

          <div className="inline-block bg-gradient-to-r from-dusty-rose to-champagne rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-md">
            <p className="font-mitr text-lg sm:text-xl text-white font-semibold">
              เปิดแล้ว {openedCount}/28 💕
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {reasons.map((reason) => (
            <FlipCard
              key={reason.id}
              number={reason.id}
              reason={reason.text}
              onFlip={() => handleCardFlip(reason.id)}
              initialFlipped={flippedCards.has(reason.id)}
            />
          ))}
        </div>

        {openedCount === 28 && (
          <div className="mt-12 sm:mt-16 text-center animate-bounce">
            <p className="font-mitr text-2xl sm:text-3xl md:text-4xl text-dusty-rose font-bold">
              ❤️ ขอบคุณที่มีอยู่ในชีวิตของฉัน ❤️
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
