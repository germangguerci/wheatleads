'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function PhoneLottie() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/phone-lottie.json',
    });
  }, []);

  return <div ref={animationContainer} />;
}
