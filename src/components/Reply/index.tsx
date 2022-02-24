import {
  RateComment,
  IconButton,
  Avatar,
  Username,
  Body,
  ReplyUsername,
  Contained,
} from '..';
import { Reply as ReplyEntity } from '../../entities';
import { Icons } from '../../enums/icons';
import { useAuthStore } from '../../stores';

export const Reply = ({ reply }: ReplyProps) => {
  const { user } = useAuthStore();
  return (
    <div className="bg-white rounded-lg flex flex-col-reverse sm:flex-row items-start gap-5 p-6">
      <div className="flex flex-row justify-between items-center w-full sm:w-auto">
        <RateComment comment={reply} />
        {reply.user.username === user.username ? (
          <div className="ml-auto flex sm:hidden sm: gap-4">
            <IconButton icon={Icons.delete} text={'Delete'} />
            <IconButton icon={Icons.edit} text={'Edit'} />
          </div>
        ) : (
          <IconButton
            icon={Icons.reply}
            text={'Reply'}
            className="ml-auto flex sm:hidden"
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
              <IconButton icon={Icons.delete} text={'Delete'} />
              <IconButton icon={Icons.edit} text={'Edit'} />
            </div>
          ) : (
            <IconButton
              icon={Icons.reply}
              text={'Reply'}
              className="ml-auto hidden sm:flex"
            />
          )}
        </div>

        <Body>
          <ReplyUsername username={reply.replyingTo} />
          {` ${reply.content}`}
        </Body>
      </div>
    </div>
  );
};

type ReplyProps = {
  reply: ReplyEntity;
};
