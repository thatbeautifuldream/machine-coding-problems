"use client";

import ProgressBar from "@/components/progress-bar/progress-bar";
import React, { useState, useEffect, useRef } from "react";

const totalMs = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMs / interval;
const progressMade = (interval / totalMs) * 100;

export default function ProgressBarInit() {
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

  return <ProgressBar progress={progress} />;
}
