import { TwitterResolverContext } from '../resolvers';
import { UserResolvers } from '../resolvers-types.generated';

const userTwitterResolver: UserResolvers<TwitterResolverContext> = {
  stats(user, _args, { db }) {
    return {
      followingCount: 123,
      followerCount: 456789,
      tweetCount: db.getUserTweets(user.id).length,
    };
  },
};
export default userTwitterResolver;
