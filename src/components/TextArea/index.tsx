import { ChangeEventHandler } from 'react';

export const TextArea = ({
  placeholder,
  value,
  onChange,
  children: child,
}: TextInputProps) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="grow border border-grayBlue border-opacity-20 rounded-md focus:border-blue outline-none px-6 py-2 font-rubik text-grayBlue text-base">
      {child}
    </textarea>
  );
};

type TextInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  children?: React.ReactNode;
};
