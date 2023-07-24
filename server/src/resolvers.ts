import Db from './db';
import { Resolvers } from './resolvers-types.generated';

export interface TwitterResolverContext {
  db: Db;
}

import Query from './resolvers/Query';
const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
};
export default resolvers;
