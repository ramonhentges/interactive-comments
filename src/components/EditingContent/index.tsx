import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import {
  Avatar,
  Body,
  Contained,
  ContainedButton,
  IconButton,
  RateComment,
  TextArea,
  Username,
} from '..';
import { Comment, Reply as ReplyEntity } from '../../entities';
import { Icons } from '../../enums/icons';
import { useAuthStore, useCommentsStore } from '../../stores';

export const EditingContent = ({ content }: EditingContentProps) => {
  const { user } = useAuthStore();
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
    <div className="bg-white rounded-lg flex flex-col-reverse sm:flex-row items-start gap-5 p-6 w-full">
      <div className="flex flex-row justify-between items-center w-full sm:w-auto">
        <RateComment comment={content} />
        <div className="ml-auto flex sm:hidden sm: gap-4">
          <IconButton icon={Icons.delete} text={'Delete'} />
          <IconButton icon={Icons.edit} text={'Edit'} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-row gap-5 justify-start items-center w-full">
          <Avatar imgUrl={content.user.image.png} />
          <div className="flex flex-row gap-2 items-center">
            <Username username={content.user.username} />
            {content.user.username === user.username && (
              <Contained>you</Contained>
            )}
          </div>
          <Body>{content.createdAt}</Body>
          <div className="ml-auto hidden sm:flex sm: gap-6">
            <IconButton icon={Icons.delete} text={'Delete'} />
            <IconButton icon={Icons.edit} text={'Edit'} />
          </div>
        </div>

        <TextArea
          value={`${replyingTo}${commentText}`}
          className="w-full"
          onChange={changeCommentText}
        />
        <ContainedButton
          text="update"
          onClick={handleEdit}
          className="ml-auto"
        />
      </div>
    </div>
  );
};

type EditingContentProps = {
  content: Comment | ReplyEntity;
};
