import { useCallback, useState } from 'react';
import {
  RateComment,
  IconButton,
  Avatar,
  Username,
  Body,
  ReplyUsername,
  Contained,
  AddComment,
  DeleteModal,
} from '..';
import { Comment, Reply as ReplyEntity } from '../../entities';
import { Icons } from '../../enums/icons';
import { useAuthStore, useCommentsStore } from '../../stores';
import { EditingContent } from '../EditingContent';

export const Reply = ({ reply, comment }: ReplyProps) => {
  const { user } = useAuthStore();
  const { startReply, replying, startEdit, deleteComment } = useCommentsStore();

  const handleReply = useCallback(() => {
    startReply(comment, reply);
  }, [startReply, reply, comment]);

  const handleEdit = useCallback(() => {
    startEdit(reply);
  }, [startEdit, reply]);

  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleDelete = useCallback(() => {
    deleteComment(reply);
  }, [deleteComment, reply]);

  const openDeleteDialog = useCallback(() => {
    setIsDeleting(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsDeleting(false);
  }, []);

  return (
    <>
      <div className="bg-white rounded-lg flex flex-col-reverse sm:flex-row items-start gap-5 p-6 w-full">
        <div className="flex flex-row justify-between items-center w-full sm:w-auto">
          <RateComment comment={reply} />
          {reply.user.username === user.username ? (
            <div className="ml-auto flex sm:hidden sm: gap-4">
              <IconButton
                icon={Icons.delete}
                text={'Delete'}
                onClick={openDeleteDialog}
              />
              <IconButton
                icon={Icons.edit}
                text={'Edit'}
                onClick={handleEdit}
              />
            </div>
          ) : (
            <IconButton
              icon={Icons.reply}
              text={'Reply'}
              className="ml-auto flex sm:hidden"
              onClick={handleReply}
            />
          )}
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-row gap-5 justify-start items-center w-full">
            <Avatar imgUrl={reply.user.image.png} />
            <div className="flex flex-row gap-2 items-center">
              <Username username={reply.user.username} />
              {reply.user.username === user.username && (
                <Contained>you</Contained>
              )}
            </div>
            <Body>{reply.createdAt}</Body>
            {reply.user.username === user.username ? (
              <div className="ml-auto hidden sm:flex sm: gap-6">
                <IconButton
                  icon={Icons.delete}
                  text={'Delete'}
                  onClick={openDeleteDialog}
                />
                <IconButton
                  icon={Icons.edit}
                  text={'Edit'}
                  onClick={handleEdit}
                />
              </div>
            ) : (
              <IconButton
                icon={Icons.reply}
                text={'Reply'}
                className="ml-auto hidden sm:flex"
                onClick={handleReply}
              />
            )}
          </div>

          {reply.editing ? (
            <EditingContent content={reply} />
          ) : (
            <Body>
              <ReplyUsername username={reply.replyingTo} />
              {` ${reply.content}`}
            </Body>
          )}
        </div>
      </div>
      {replying[reply.id] && (
        <AddComment type="reply" replyingToId={reply.id} />
      )}
      <DeleteModal
        onDelete={handleDelete}
        onCancel={handleCancel}
        isOpen={isDeleting}
      />
    </>
  );
};

type ReplyProps = {
  comment: Comment;
  reply: ReplyEntity;
};
