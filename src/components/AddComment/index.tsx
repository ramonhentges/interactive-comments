import { ChangeEvent, useCallback, useState } from 'react';
import { Avatar, ContainedButton, TextArea } from '..';
import { Comment } from '../../entities';
import { getId, useAuthStore, useCommentsStore } from '../../stores';

export const AddComment = ({ type }: AddCommentProps) => {
  const { user } = useAuthStore();
  const { addComment } = useCommentsStore();
  const [commentText, setCommentText] = useState<string>('');

  const changeCommentText = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setCommentText(event.target.value);
    },
    [],
  );

  const sendComment = useCallback(() => {
    if (type === 'new') {
      const comment = new Comment();
      comment.user = user;
      comment.content = commentText;
      addComment(comment);
    }
    setCommentText('');
  }, [type, user, commentText, addComment]);

  const sendTexts = {
    new: 'send',
    edit: 'update',
    reply: 'reply',
  };

  return (
    <div className="bg-white rounded-lg w-full mt-4 p-6 flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="hidden sm:flex">
        <Avatar imgUrl={user.image.png} />
      </div>
      <TextArea
        value={commentText}
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
};
