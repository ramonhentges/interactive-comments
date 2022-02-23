import {
  RateComment,
  IconButton,
  Avatar,
  Username,
  Body,
  ReplyUsername,
} from '..';
import { Reply as ReplyEntity } from '../../entities';
import { Icons } from '../../enums/icons';

export const Reply = ({ reply }: ReplyProps) => {
  return (
    <div className="bg-white rounded-lg flex flex-col-reverse sm:flex-row items-start gap-5 p-6">
      <div className="flex flex-row justify-between items-center w-full sm:w-auto">
        <RateComment comment={reply} />
        <IconButton
          icon={Icons.reply}
          text={'Reply'}
          className="ml-auto sm:hidden"
        />
      </div>
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-row gap-5 justify-start items-center w-full">
          <Avatar imgUrl={reply.user.image.png} />
          <Username username={reply.user.username} />
          <Body>{reply.createdAt}</Body>
          <IconButton
            icon={Icons.reply}
            text={'Reply'}
            className="ml-auto hidden sm:flex"
          />
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
