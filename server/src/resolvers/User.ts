import { TwitterResolverContext } from '../resolvers';
import { UserResolvers } from '../resolvers-types.generated';
import { favoriteTransform, tweetTransform } from '../transforms';

const userTwitterResolver: UserResolvers<TwitterResolverContext> = {
  stats(user, _args, { db }) {
    return {
      followingCount: 123,
      followerCount: 456789,
      tweetCount: db.getUserTweets(user.id).length,
    };
  },
  favorites(user, _args, { db }) {
    const faves = db.getUserFavorites(user.id);
    return faves.map((f) => {
      return {
        ...favoriteTransform(f),
        user,
        tweet: tweetTransform(db.getTweetById(f.tweetId)),
      };
    });
  },
};
export default userTwitterResolver;
