import Image from 'next/image';

export const Avatar = ({ imgUrl }: AvatarProps) => {
  return (
    <Image
      src={imgUrl}
      alt="Avatar"
      className="rounded-full"
      width={35}
      height={35}
    />
  );
};

type AvatarProps = {
  imgUrl: string;
};
