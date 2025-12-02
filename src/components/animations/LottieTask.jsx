import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieTask = ({ classname }) => {
  return (
    <DotLottieReact className={classname}
      src="/animations/Task Loader.json"
      loop
      autoplay
    />
  );
};

export default LottieTask;