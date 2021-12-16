import { gql } from "apollo-server-express"

const typeDefs = gql`
  type Post {
      id: ID
      title: String
      description: String
  }

  type Query {
    hello: String
    getAllPosts: [Post]
    getPost(id: ID): Post
  }

  input PostInput {
      title: String
      description: String
  }

  type Mutation {
      createPost(post: PostInput): Post
      deletePost(id: ID): Boolean
      updatePost(id:ID, post: PostInput): Post
  }
`;

export default typeDefs;
