import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <DotLottieReact
        autoplay
        loop
        src="/animations/loader.json"  
        style={{ height: 200, width: 200 }}
      />
      <p className="mt-2 text-white text-lg font-medium animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
