import Image from 'next/image';
import { Comment, Reply } from '../../entities';

export const RateComment = ({ comment }: RateCommentProps) => {
  return (
    <div className="flex flex-row sm:flex-col items-center justify-center px-3 py-1 gap-4 sm:gap-2 bg-lightGray rounded-lg">
      <button className="opacity-40 hover:opacity-90">
        <Image
          src="/assets/icon-plus.svg"
          alt="Add"
          objectFit="contain"
          width={'11px'}
          height={'11px'}
        />
      </button>
      <p className="font-rubik font-medium text-base text-blue">
        {comment.score}
      </p>
      <button className="opacity-40 hover:opacity-90">
        <Image
          src="/assets/icon-minus.svg"
          alt="Subtract"
          objectFit="contain"
          width={'11px'}
          height={'11px'}
        />
      </button>
    </div>
  );
};

type RateCommentProps = {
  comment: Comment | Reply;
};
