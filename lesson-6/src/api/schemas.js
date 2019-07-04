import { schema } from 'normalizr';

export const User = new schema.Entity('users');

export const UserCollection = [User];

export const Product = new schema.Entity('products', {
  owner: User,
});

export const Message = new schema.Entity('messages');

export const Chat = new schema.Entity('chats', {
  lastMessage: Message,
  // participants: UserCollection,
});

export const ChatCollection = [Chat];

export const MessageCollection = [Message];

export const ProductList = [Product];
