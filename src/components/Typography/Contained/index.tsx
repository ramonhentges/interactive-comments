export const Contained = ({ children }: ContainedProps) => {
  return (
    <span className="font-rubik font-medium text-xs text-white bg-blue px-1 py-[1px] rounded-sm">
      {children}
    </span>
  );
};

type ContainedProps = {
  children: React.ReactNode;
};
