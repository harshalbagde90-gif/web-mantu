import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface BlurTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  delay?: number;
  wordDelay?: number; // Delay between words if splitting by words
}

export const BlurText = ({ text, className = "", textClassName = "", delay = 0, wordDelay = 0.05 }: BlurTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setWords(text.split(" "));
  }, [text]);

  useEffect(() => {
    if (!containerRef.current || words.length === 0) return;

    const wordElements = containerRef.current.querySelectorAll(".blur-word");
    
    gsap.fromTo(
      wordElements,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: 10,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        stagger: wordDelay,
        delay: delay,
        ease: "power2.out",
      }
    );
  }, [words, delay, wordDelay]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-pre">
          <span className={`blur-word inline-block ${textClassName}`}>{word}</span>
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};
