import { MouseEventHandler } from 'react';

export const ContainedButton = ({
  text,
  className = '',
  onClick,
}: ContainedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-rubik text-base font-medium hover:opacity-40 uppercase text-white bg-blue rounded-lg px-6 py-3 ${className}`}>
      {text}
    </button>
  );
};

type ContainedButtonProps = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
