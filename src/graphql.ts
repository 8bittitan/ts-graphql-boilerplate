import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas'

import UserTypes from './modules/user/schema'
import UserResolvers from './modules/user/resolvers'

export const typeDefs = mergeTypes([UserTypes])
export const resolvers = mergeResolvers([UserResolvers])
