import { QueryResolvers } from '../resolvers-types.generated';
import { TwitterResolverContext } from '../resolvers';
import { tweetTransform } from '../transforms';

const queryTwitterResolvers: QueryResolvers<TwitterResolverContext> = {
  currentUser: (_parent, _args, { db }) => {
    const [firstUser] = db.getAllUsers();
    if (!firstUser)
      throw new Error(
        'currentUser was requested, but there are no users in the database'
      );
    return firstUser;
  },
  suggestions: (_parent, _args, { db }) => {
    return db.getAllSuggestions();
  },
  tweets: (
    _parent,
    _args,
    { db, dbTweetToFavoriteCountMap, dbUserCache, dbTweetCache }
  ) => {
    db.getAllUsers().forEach((user) => {
      dbUserCache[user.id] = user;
    });
    db.getAllFavorites().forEach((favorite) => {
      const count = dbTweetToFavoriteCountMap[favorite.tweetId] || 0;
      dbTweetToFavoriteCountMap[favorite.tweetId] = count + 1;
    });
    return db.getAllTweets().map((t) => {
      dbTweetCache[t.id] = t;
      return tweetTransform(t);
    });
  },
};
export default queryTwitterResolvers;
