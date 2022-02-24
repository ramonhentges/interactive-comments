import Image from 'next/image';
import { useCallback } from 'react';
import { Comment, Reply } from '../../entities';
import { useCommentsStore } from '../../stores';

export const RateComment = ({ comment }: RateCommentProps) => {
  const { addScore, removeScore } = useCommentsStore();

  const addScoreToComment = useCallback(() => {
    addScore(comment.id || 0);
  }, [comment, addScore]);

  const removeScoreFromComment = useCallback(() => {
    removeScore(comment.id || 0);
  }, [comment, removeScore]);

  return (
    <div className="flex flex-row sm:flex-col items-center justify-center px-3 py-1 gap-4 sm:gap-2 bg-lightGray bg-opacity-50 rounded-lg">
      <button
        className="opacity-40 hover:opacity-90"
        onClick={addScoreToComment}>
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
      <button
        className="opacity-40 hover:opacity-90"
        onClick={removeScoreFromComment}>
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
