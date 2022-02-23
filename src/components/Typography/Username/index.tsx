export const Username = ({ username }: UsernameProps) => {
  return (
    <span className="font-rubik text-base text-darkBlue font-medium">
      {username}
    </span>
  );
};

type UsernameProps = {
  username: string;
};
