export const Body = ({ children }: BodyProps) => {
  return (
    <span className="font-rubik text-base text-grayBlue font-normal">
      {children}
    </span>
  );
};

type BodyProps = {
  children: React.ReactNode;
};
