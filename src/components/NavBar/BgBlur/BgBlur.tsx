import React from "react";

const BgBlur = () => {
  return (
    <div className="fixed -z-10 w-screen h-screen blur-3xl opacity-50">
      <div className="w-96 h-96 bg-green-400 rounded-full blur-3xl absolute top-40 left-40"></div>
      <div className="w-60 h-60 bg-orange-400 rounded-full absolute blur-3xl right-1/3 top-1/2"></div>
      <div className="w-60 h-60 bg-blue-400 rounded-full absolute blur-3xl right-0 top-1/3"></div>
    </div>
  );
};

export default BgBlur;
