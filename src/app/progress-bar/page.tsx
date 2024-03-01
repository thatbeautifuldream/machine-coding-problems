"use client";

import { useEffect, useRef, useState } from "react";
import "./styles.css";

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </div>
  );
}

const totalMs = 10 * 1000;
const interval = 1 * 500;
const totalCycles = totalMs / interval;
const progressMade = (interval / totalMs) * 100;

export default function Page() {
  const [progress, setProgress] = useState(0);
  const timer = useRef<any>(null);
  const cyclesCompleted = useRef(0);
  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevProgress) => prevProgress + progressMade);
      cyclesCompleted.current += 1;
      if (cyclesCompleted.current === totalCycles) {
        clearInterval(timer.current);
      }
    }, interval);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen py-2 gap-4">
      <ProgressBar progress={progress} />
    </div>
  );
}
