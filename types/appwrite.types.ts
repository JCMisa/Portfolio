
import { Models } from "node-appwrite";

export interface Feedback extends Models.Document {
  feedBackId: string;
  fullName: string;
  email: string;
  company: string;
  message: string;
}
