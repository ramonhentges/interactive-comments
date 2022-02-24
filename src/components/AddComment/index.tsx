import { Avatar, ContainedButton, TextArea } from '..';
import { useAuthStore } from '../../stores';

export const AddComment = ({ type }: AddCommentProps) => {
  const { user } = useAuthStore();
  return (
    <div className="bg-white rounded-lg w-full mt-4 p-6 flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="hidden sm:flex">
        <Avatar imgUrl={user.image.png} />
      </div>
      <TextArea placeholder="Add a comment..." />
      <div className="flex flex-row items-center justify-between">
        <div className="block sm:hidden">
          <Avatar imgUrl={user.image.png} />
        </div>
        <ContainedButton text="send" />
      </div>
    </div>
  );
};

type AddCommentProps = {
  type: 'new' | 'edit' | 'reply';
};
