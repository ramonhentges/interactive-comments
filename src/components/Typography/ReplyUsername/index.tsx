export const ReplyUsername = ({ username }: ReplyUsernameProps) => {
  return (
    <span className="font-rubik text-base text-blue font-medium">
      @{username}
    </span>
  );
};

type ReplyUsernameProps = {
  username: string;
};
