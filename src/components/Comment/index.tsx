import { RateComment, IconButton, Avatar, Username, Body, Reply } from '..';
import { Comment as CommentEntity } from '../../entities';
import { Icons } from '../../enums/icons';

export const Comment = ({ comment }: CommentProps) => {
  return (
    <>
      <div className="bg-white rounded-lg flex flex-col-reverse sm:flex-row items-start gap-5 p-6">
        <div className="flex flex-row justify-between items-center w-full sm:w-auto">
          <RateComment comment={comment} />
          <IconButton
            icon={Icons.reply}
            text={'Reply'}
            className="ml-auto sm:hidden"
          />
        </div>
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-row gap-5 justify-start items-center w-full">
            <Avatar imgUrl={comment.user.image.png} />
            <Username username={comment.user.username} />
            <Body>{comment.createdAt}</Body>
            <IconButton
              icon={Icons.reply}
              text={'Reply'}
              className="ml-auto hidden sm:flex"
            />
          </div>
          <Body>{comment.content}</Body>
        </div>
      </div>
      {comment.replies.map(reply => (
        <Reply key={reply.id} reply={reply} />
      ))}
    </>
  );
};

type CommentProps = {
  comment: CommentEntity;
};
