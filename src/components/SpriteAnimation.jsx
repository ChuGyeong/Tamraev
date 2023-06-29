import React, { useState, useEffect, useRef, memo } from 'react';

const SpriteAnimation = memo(({ url, imgW, spriteW, animationSpeed }) => {
   const [likePosition, setLikePosition] = useState(0);
   const imgWidth = imgW;
   const spriteWidth = spriteW;
   const spriteHeight = 76;
   const spriteCount = Math.floor(imgWidth / spriteWidth);
   const animationRef = useRef(null);
   const isAnimatingRef = useRef(false);

   const startAnimation = () => {
      if (!isAnimatingRef.current) {
         setLikePosition(0);
         isAnimatingRef.current = true;
         animate();
      } else {
         setLikePosition(0);
      }
   };

   useEffect(() => {
      return () => {
         if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
         }
      };
   }, []);

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
            currentPosition = (spriteCount - 1) * -spriteWidth;
            isAnimatingRef.current = false;
         }

         setLikePosition(currentPosition);

         if (isAnimatingRef.current) {
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
