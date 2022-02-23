export const Username = ({ username }: UsernameProps) => {
  return (
    <p className="font-rubik text-base text-darkBlue font-medium">{username}</p>
  );
};

type UsernameProps = {
  username: string;
};
