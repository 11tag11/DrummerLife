import { Articles } from "./articles";
import { UserId } from "./user-id";

export interface Post {
    likes: string[];
    _id: string;
    text: string;
    userId: UserId;
    articleId: Articles;
    created_at: string;
    updatedAt: string;
    __v: number;
}