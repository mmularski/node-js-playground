import {Document} from "mongoose";

export default interface PostInterface extends Document {
  title: string;
  description: string;
}