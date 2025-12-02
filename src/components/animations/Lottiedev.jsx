import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieDeveloper = () => {
  return (
    <DotLottieReact className='w-[400px] h-[400px]'
      src="/animations/Coding.json"
      loop
      autoplay
    />
  );
};

export default LottieDeveloper;

