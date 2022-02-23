import { Icons, IconType } from '../../../enums/icons';
import Image from 'next/image';
import { useMemo } from 'react';
export const IconButton = ({ icon, text, className = '' }: IconButtonProps) => {
  return (
    <button
      className={`flex flex-row gap-2 items-center font-rubik ${
        icon.color === 'red' ? 'text-red' : 'text-blue'
      } text-base font-medium hover:opacity-40 ${className}`}>
      <Image
        src={`/assets/${icon.icon}`}
        alt="Icon"
        objectFit="contain"
        width={'11px'}
        height={'11px'}
      />
      {text}
    </button>
  );
};

type IconButtonProps = {
  icon: IconType;
  text: string;
  className?: string;
};
