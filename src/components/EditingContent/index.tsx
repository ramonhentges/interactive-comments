import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { ContainedButton, TextArea } from '..';
import { Comment, Reply as ReplyEntity } from '../../entities';
import { useCommentsStore } from '../../stores';

export const EditingContent = ({ content }: EditingContentProps) => {
  const { sendEdit } = useCommentsStore();

  const [commentText, setCommentText] = useState(content.content);

  const replyingTo = useMemo(() => {
    //@ts-ignore
    if (content.replyingTo) {
      //@ts-ignore
      return `@${content.replyingTo}`;
    }
    return `@${content.user.username}`;
  }, [content]);

  const changeCommentText = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setCommentText(event.target.value.replace(replyingTo, ''));
    },
    [replyingTo],
  );

  const handleEdit = useCallback(() => {
    sendEdit(content, commentText);
  }, [content, sendEdit, commentText]);

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <TextArea
        value={`${replyingTo}${commentText}`}
        className="w-full"
        onChange={changeCommentText}
      />
      <ContainedButton text="update" onClick={handleEdit} className="ml-auto" />
    </div>
  );
};

type EditingContentProps = {
  content: Comment | ReplyEntity;
};
