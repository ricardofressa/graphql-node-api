import { userMutation } from './resources/user/user.schema';
import { postMutation } from './resources/post/post.schema';
import { commentMutations } from './resources/comment/comment.schema';

const Mutation = `
  type Mutation {
    ${userMutation}
    ${commentMutations}
    ${postMutation}
  }
`;

export { Mutation };
