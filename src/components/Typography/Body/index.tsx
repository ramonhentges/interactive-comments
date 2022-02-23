export const Body = ({ children }: BodyProps) => {
  return (
    <p className="font-rubik text-base text-grayBlue font-normal">{children}</p>
  );
};

type BodyProps = {
  children: React.ReactNode;
};
