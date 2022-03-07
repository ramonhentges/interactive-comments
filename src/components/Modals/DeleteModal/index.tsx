import { ColorEnum } from '../../../enums';
import { ContainedButton } from '../../Buttons';
import { Body, Title } from '../../Typography';

export const DeleteModal = ({
  onDelete,
  isOpen,
  onCancel,
}: DeleteModalProps) => {
  return (
    <div
      className={`${
        isOpen ? 'fixed' : 'hidden'
      } w-full h-full min-w-screen min-h-screen top-0 left-0 bg-grayBlue bg-opacity-25 flex justify-center items-center px-5`}>
      <div className="bg-white flex flex-col px-6 py-7 rounded-lg border border-darkBlue border-opacity-50 sm:max-w-sm gap-3">
        <Title>Delete comment</Title>
        <Body>{`Are you sure you want to delete this comment? This will remove the comment and can't be undone`}</Body>
        <div className="flex flex-row justify-between gap-3">
          <ContainedButton
            text="no, cancel"
            className="w-full"
            color={ColorEnum.grayBlue}
            onClick={onCancel}
          />
          <ContainedButton
            text="yes, delete"
            className="w-full"
            color={ColorEnum.red}
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

type DeleteModalProps = {
  onCancel: () => void;
  onDelete: () => void;
  isOpen: boolean;
};
