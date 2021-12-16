import PostInterface from "@models/Post.interface";
import { model, Schema } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default model<PostInterface>('Post', PostSchema);
