"use client"
import React, { useState, useEffect } from "react";

const Domi2 = () => {
  const targetPercentage = 75;
  const [percentage, setPercentage] = useState(0);
  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 1;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    let animationFrameId;
    let start;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const progress = Math.min(elapsed / 1000, 1) * targetPercentage;
      setPercentage(progress);

      if (progress < targetPercentage) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPercentage]);

  return (
    <div className="flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2}>
        <defs>
          <linearGradient id="gradientRedStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#08ae8b" />
            <stop offset="100%" stopColor="#22234b" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          stroke="#22234b"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset="0"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        {/* Progress circle */}
        <circle
          stroke="url(#gradientRedStroke)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        {/* Center red circle */}
        <circle
  cx={radius}
  cy={radius - 13}
  r="25"
  fill="transparent"
/>

<text
  x={radius}
  y={radius - 50}
  textAnchor="middle"
  dominantBaseline="middle"
  fill="white"
  fontSize="16"
  width="1"
  fontWeight="bold"
>
  <tspan x={radius} dy="2em" fill="#979EAE" fontSize='13'>Safty</tspan>
  <tspan x={radius} dy="0.9em" fontSize='28'>9.3 </tspan>
  <tspan x={radius} dy="2.5em" fill="#979EAE" fontSize='13'>Total score</tspan>

  
</text>
        falkfj
      </svg>
    </div>
  );
};

export default Domi2;
