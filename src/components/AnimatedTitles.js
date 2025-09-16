import React, { useState, useEffect } from 'react';

const AnimatedTitles = ({ titles, interval = 2000, typeSpeed = 100, eraseSpeed = 50 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    if (isTyping && !isErasing) {
      // Typing phase
      if (currentText.length < currentTitle.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait before erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
          setIsErasing(true);
        }, interval);
        return () => clearTimeout(timer);
      }
    } else if (isErasing && !isTyping) {
      // Erasing phase
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, eraseSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished erasing, move to next title
        setIsErasing(false);
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }
  }, [currentText, currentIndex, isTyping, isErasing, titles, interval, typeSpeed, eraseSpeed]);

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default AnimatedTitles;
