import PostModel from "@models/Post.model";
import PostInterface from "@models/Post.interface";

type QueryIdArgsType = {
  id: string
}

type CreatePostType = {
  post: PostInterface
}

type UpdatePostType = {
  id: string,
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
    getPost: async (_: any, { id }: QueryIdArgsType, __: any, ___: any) => { // eslint-disable-line @typescript-eslint/no-unused-vars
      return await PostModel.findById(id);
    }
  },
  Mutation: {
    createPost: async (parent: any, args: CreatePostType, context: any, info: any) => { // eslint-disable-line @typescript-eslint/no-unused-vars
      const { title, description } = args.post;

      const post = new PostModel({ title, description });

      await post.save();

      return post;
    },
    deletePost: async (_: any, { id }: QueryIdArgsType, __: any, ___: any) => { // eslint-disable-line @typescript-eslint/no-unused-vars
      await PostModel.findByIdAndDelete(id);

      return true;
    },
    updatePost: async (_: any, args: UpdatePostType, __: any, ___: any) => { // eslint-disable-line @typescript-eslint/no-unused-vars
      const { id } = args;
      const { title, description } = args.post;

      const post = await PostModel.findByIdAndUpdate(id, { title, description }, { new: true });

      return post;
    }
  },
};

export default resolvers;