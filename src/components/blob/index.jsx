'use client';

const Blob = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="relative w-full h-full">
        <div className="absolute top-[35%] left-[40%] w-96 h-96 bg-[#1c3144] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] left-[25%] w-96 h-96 bg-[#ffba08] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[45%] left-[20%] w-96 h-96 bg-light-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Blob;