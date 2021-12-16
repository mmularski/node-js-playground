import PostModel from "@models/Post.model";
import PostInterface from "@models/Post.interface";

type QueryIdArgsType = {
  id: String
}

type CreatePostType = {
  post: PostInterface
}

type UpdatePostType = {
  id: String,
  post: PostInterface
}

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world';
    },
    getAllPosts: async () => {
      return await PostModel.find();
    },
    getPost: async (_: any, { id }: QueryIdArgsType, __: any, ___: any) => {
      return await PostModel.findById(id);
    }
  },
  Mutation: {
    createPost: async (parent: any, args: CreatePostType, context: any, info: any) => {
      const { title, description } = args.post;

      const post = new PostModel({ title, description });

      await post.save();

      return post;
    },
    deletePost: async (_: any, { id }: QueryIdArgsType, __: any, ___: any) => {
      await PostModel.findByIdAndDelete(id);

      return true;
    },
    updatePost: async (_: any, args: UpdatePostType, __: any, ___: any) => {
      const { id } = args;
      const { title, description } = args.post;

      const post = await PostModel.findByIdAndUpdate(id, { title, description }, { new: true });

      return post;
    }
  },
};

export default resolvers;