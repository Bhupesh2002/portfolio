import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieLib = ({ classname }) => {
  return (
    <DotLottieReact className={classname}
      src="/animations/Library.json"
      loop
      autoplay
    />
  );
};

export default LottieLib;