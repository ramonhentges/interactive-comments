import { useCallback } from 'react';
import {
  AddComment,
  Avatar,
  Body,
  Contained,
  IconButton,
  RateComment,
  Reply,
  Username,
} from '..';
import { Comment as CommentEntity } from '../../entities';
import { Icons } from '../../enums/icons';
import { useAuthStore, useCommentsStore } from '../../stores';
import { EditingContent } from '../EditingContent';

export const Comment = ({ comment }: CommentProps) => {
  const { user } = useAuthStore();
  const { startReply, replying } = useCommentsStore();

  const reply = useCallback(() => {
    startReply(comment);
  }, [startReply, comment]);

  return (
    <div className="flex flex-col items-start w-full">
      <div className="bg-white rounded-lg flex flex-col-reverse sm:flex-row items-start gap-5 p-6 mb-4">
        <div className="flex flex-row justify-between items-center w-full sm:w-auto">
          <RateComment comment={comment} />
          {comment.user.username === user.username ? (
            <div className="ml-auto flex sm:hidden sm: gap-4">
              <IconButton icon={Icons.delete} text={'Delete'} />
              <IconButton icon={Icons.edit} text={'Edit'} />
            </div>
          ) : (
            <IconButton
              icon={Icons.reply}
              text={'Reply'}
              className="ml-auto flex sm:hidden"
              onClick={reply}
            />
          )}
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-row gap-5 justify-start items-center w-full">
            <Avatar imgUrl={comment.user.image.png} />
            <div className="flex flex-row gap-2 items-center">
              <Username username={comment.user.username} />
              {comment.user.username === user.username && (
                <Contained>you</Contained>
              )}
            </div>
            <Body>{comment.createdAt}</Body>
            {comment.user.username === user.username ? (
              <div className="ml-auto hidden sm:flex sm: gap-6">
                <IconButton icon={Icons.delete} text={'Delete'} />
                <IconButton icon={Icons.edit} text={'Edit'} />
              </div>
            ) : (
              <IconButton
                icon={Icons.reply}
                text={'Reply'}
                className="ml-auto hidden sm:flex"
                onClick={reply}
              />
            )}
          </div>
          <Body>{comment.content}</Body>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="px-10">
          <div className="bg-grayBlue bg-opacity-20 w-[1px] h-full"></div>
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          {replying[comment.id] && (
            <AddComment type="reply" replyingToId={comment.id} />
          )}
          {comment.replies.map(reply =>
            reply.editing ? (
              <EditingContent key={reply.id} content={reply} />
            ) : (
              <Reply key={reply.id} reply={reply} comment={comment} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

type CommentProps = {
  comment: CommentEntity;
};
