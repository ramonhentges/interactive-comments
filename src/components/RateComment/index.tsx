import Image from 'next/image';

export const RateComment = () => {
  return (
    <div className="flex flex-row sm:flex-col items-center justify-center px-3 py-1 gap-4 sm:gap-2 bg-lightGray rounded-lg">
      <button className="opacity-40 hover:opacity-90">
        <Image
          src="/assets/icon-plus.svg"
          alt="Add"
          objectFit="contain"
          width={'11px'}
          height={'11px'}
        />
      </button>
      <p className="font-rubik font-medium text-base text-blue">12</p>
      <button className="opacity-40 hover:opacity-90">
        <Image
          src="/assets/icon-minus.svg"
          alt="Subtract"
          objectFit="contain"
          width={'11px'}
          height={'11px'}
        />
      </button>
    </div>
  );
};
