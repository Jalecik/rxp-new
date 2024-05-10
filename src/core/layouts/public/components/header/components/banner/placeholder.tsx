import React, { useState, useEffect, useMemo } from 'react';

const TypingPlaceholder: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const phrases: string[] = useMemo(() => ['Type something...', 'Keep typing...', 'Hello there...'], []);
  const [placeholder, setPlaceholder] = useState<string>(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const typingAnimation = setInterval(() => {
      const currentPhrase: string = phrases[index];
      setPlaceholder((prevPlaceholder) => {
        const truncatedPlaceholder: string = prevPlaceholder.slice(0, -1);
        return currentPhrase.startsWith(truncatedPlaceholder)
          ? truncatedPlaceholder + currentPhrase[prevPlaceholder.length]
          : '';
      });
    }, 200);

    return () => clearInterval(typingAnimation);
  }, [index, phrases]);

  return <input type="text" placeholder={placeholder} />;
};

export default TypingPlaceholder;
