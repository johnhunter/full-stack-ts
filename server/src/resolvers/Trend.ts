import { TwitterResolverContext } from '../resolvers';
import { TrendResolvers } from '../resolvers-types.generated';

const trendTwitterResolver: TrendResolvers<TwitterResolverContext> = {
  // Note: meta-method to discriminate the type so GQL will know how to treat the
  __resolveType(obj, _context, _info) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    if (typeof (obj as any).hashtag === 'string') {
      return 'HashtagTrend';
    } else return 'TopicTrend';
    return null; // GraphQLError is thrown
  },
};
export default trendTwitterResolver;
