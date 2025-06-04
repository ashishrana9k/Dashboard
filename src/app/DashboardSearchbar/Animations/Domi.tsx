"use client"
import React, { useState, useEffect } from "react";

const Domi = () => {
  const targetPercentage = 75;
  const [percentage, setPercentage] = useState(0);
  const radius = 80;
  const stroke = 13;
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
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="blue" />
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
          stroke="url(#gradientStroke)"
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

         <circle
          cx={radius}
          cy={radius -13}
          r="22"
          fill="#2563EB"
           
        />

        {/* Center image instead of number */}
          <image
        className="p-10"
          href="/images/smile.svg" // Placeholder for your actual image path
          x={radius - 20}
          y={radius - 33}
          width="40"
          height="40"
        />
      </svg>
    </div>
  );
};

export default Domi;
