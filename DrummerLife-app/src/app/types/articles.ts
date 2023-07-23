import { UserId } from "./user-id";

export interface Articles {
    subscribers: string[];
    posts: string[];
    _id: string;
    articleName: string;
    userId: UserId;
    created_at: string;
    updatedAt: string;
    __v: number;
}
