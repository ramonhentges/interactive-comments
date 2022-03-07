import { MouseEventHandler } from 'react';
import { ColorEnum } from '../../../enums';

export const ContainedButton = ({
  text,
  className = '',
  color = ColorEnum.blue,
  onClick,
}: ContainedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-rubik text-base font-medium hover:opacity-40 uppercase text-white ${color} rounded-lg px-6 py-3 ${className}`}>
      {text}
    </button>
  );
};

type ContainedButtonProps = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: ColorEnum;
};
