export const Icons = {
  delete: { icon: 'icon-delete.svg', color: 'red' } as IconType,
  edit: { icon: 'icon-edit.svg', color: 'blue' } as IconType,
  reply: { icon: 'icon-reply.svg', color: 'blue' } as IconType,
};

export type IconType = {
  icon: string;
  color: 'red' | 'blue';
};
