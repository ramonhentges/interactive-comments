import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Avatar, ContainedButton, TextArea } from '..';
import { Comment } from '../../entities';
import { useAuthStore, useCommentsStore } from '../../stores';

export const AddComment = ({
  type,
  className = '',
  replyingToId = 0,
}: AddCommentProps) => {
  const { user } = useAuthStore();
  const { addComment, sendReply, replying } = useCommentsStore();
  const [commentText, setCommentText] = useState<string>('');

  const replyingTo = useMemo(() => {
    if (replyingToId > 0) {
      //@ts-ignore
      return `@${replying[replyingToId].reply.replyingTo}`;
    }
    return '';
  }, [replyingToId, replying]);

  const changeCommentText = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setCommentText(event.target.value.replace(replyingTo, ''));
    },
    [replyingTo],
  );

  const sendComment = useCallback(() => {
    if (type === 'new') {
      const comment = new Comment();
      comment.user = user;
      comment.content = commentText;
      addComment(comment);
    } else if (type === 'reply') {
      sendReply(replyingToId, commentText);
    }
    setCommentText('');
  }, [type, user, commentText, addComment, sendReply, replyingToId]);

  const sendTexts = {
    new: 'send',
    edit: 'update',
    reply: 'reply',
  };

  return (
    <div
      className={`bg-white rounded-lg w-full p-6 flex flex-col sm:flex-row sm:items-start gap-4 ${className}`}>
      <div className="hidden sm:flex">
        <Avatar imgUrl={user.image.png} />
      </div>
      <TextArea
        value={`${replyingTo}${commentText}`}
        placeholder="Add a comment..."
        onChange={changeCommentText}
      />

      <div className="flex flex-row items-center justify-between">
        <div className="block sm:hidden">
          <Avatar imgUrl={user.image.png} />
        </div>
        <ContainedButton text={sendTexts[type]} onClick={sendComment} />
      </div>
    </div>
  );
};

type AddCommentProps = {
  type: 'new' | 'edit' | 'reply';
  replyingToId?: number;
  className?: string;
};
