import { makeExecutableSchema } from 'graphql-tools';
import { Query } from './query';
import { Mutation } from './mutation';
import { userTypes } from './resources/user/user.schema';
import { postTypes } from './resources/post/post.schema';
import { commentTypes } from './resources/comment/comment.schema';
import { postResolvers } from './resources/post/post.resolvers';
import { userResolvers } from './resources/user/user.resolvers';
import { commentResolvers } from './resources/comment/comment.resolvers';
import { merge } from 'lodash';

const resolvers = merge(commentResolvers, postResolvers, userResolvers);

const SchemaDefinition = `
	type Schema {
		query: Query
		mutation: Mutation
	}
`;

export default makeExecutableSchema({
	typeDefs: [ SchemaDefinition, Query, Mutation, commentTypes, userTypes, postTypes ],
	resolvers
});
