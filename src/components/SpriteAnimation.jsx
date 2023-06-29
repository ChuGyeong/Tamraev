import React, { useState, useRef, memo } from 'react';

const SpriteAnimation = memo(({ url, imgW, spriteW, animationSpeed }) => {
   const [likePosition, setLikePosition] = useState(0);
   const spriteWidth = spriteW;
   const spriteHeight = 76;
   const spriteCount = Math.floor(imgW / spriteWidth);
   const animationRef = useRef(null);

   const startAnimation = () => {
      if (!animationRef.current) {
         setLikePosition(0);
         animate();
      }
   };

   const animate = () => {
      let currentPosition = likePosition;
      let previousTime = performance.now();

      const frame = currentTime => {
         const deltaTime = currentTime - previousTime;

         if (deltaTime >= animationSpeed) {
            currentPosition -= spriteWidth;
            previousTime = currentTime;
         }

         if (currentPosition <= -(spriteCount * spriteWidth)) {
            currentPosition = 0;
            setLikePosition(currentPosition);
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
         } else {
            setLikePosition(currentPosition);
            animationRef.current = requestAnimationFrame(frame);
         }
      };

      animationRef.current = requestAnimationFrame(frame);
   };

   return (
      <div
         style={{
            width: spriteWidth,
            height: spriteHeight,
            background: `url(${url}) ${likePosition}px 0`,
         }}
         onClick={startAnimation}
      />
   );
});

export default SpriteAnimation;
