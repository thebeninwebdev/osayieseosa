'use client'

import { useEffect, useState } from "react";

const SplashScreenProvider = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return isLoading?
    <div className="min-h-screen bg-black flex items-center justify-center">
    {/* Main container for the loading animation */}
    <div className="relative w-64 h-64">
      {/* Outer glowing ring */}
      <div className="absolute inset-0 rounded-full animate-spin-slow"
        style={{
          background: 'conic-gradient(from 0deg, #2ecc71, #27ae60, #2ecc71)',
          filter: 'blur(12px)',
          animation: 'spin 4s linear infinite'
        }} 
      />
      
      {/* Inner black circle */}
      <div className="absolute inset-2 bg-black rounded-full z-10" />
      
      {/* Subtle particle effect inside the circle */}
      <div className="absolute inset-8 rounded-full overflow-hidden z-20">
        <div className="w-full h-full"
          style={{
            background: 'linear-gradient(45deg, #27ae60 0%, transparent 100%)',
            filter: 'blur(8px)',
            transform: 'rotate(-45deg)',
            opacity: 0.3,
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Text container */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <h1 
          className="text-3xl font-bold tracking-wider"
          style={{
            color: '#2ecc71',
            textShadow: '0 0 8px rgba(46, 204, 113, 0.3)',
            animation: 'glow 2s ease-in-out infinite'
          }}
        >
          mreseosa
        </h1>
      </div>
    </div>

    {/* CSS Animations */}
    <style jsx>{`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 0.3;
          transform: rotate(-45deg) scale(1);
        }
        50% {
          opacity: 0.5;
          transform: rotate(-45deg) scale(1.1);
        }
      }

      @keyframes glow {
        0%, 100% {
          text-shadow: 0 0 8px rgba(46, 204, 113, 0.3);
        }
        50% {
          text-shadow: 0 0 15px rgba(46, 204, 113, 0.5);
        }
      }
    `}</style>
  </div>
    : children;
}

export default SplashScreenProvider