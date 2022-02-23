import Image from 'next/image';

export const Avatar = ({ imgUrl }: AvatarProps) => {
  return (
    <Image
      src={imgUrl}
      alt="Avatar"
      className="rounded-full"
      width={45}
      height={45}
    />
  );
};

type AvatarProps = {
  imgUrl: string;
};
