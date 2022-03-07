export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="font-rubik text-xl font-medium text-darkBlue">{children}</h1>
  );
};

type TitleProps = {
  children: React.ReactNode;
};
