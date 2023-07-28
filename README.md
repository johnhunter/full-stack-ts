# Full Stack TypeScript

Forked from https://github.com/mike-north/full-stack-ts

This repo contains completed exercises from Mike North's [Full Stack TypeScript](https://frontendmasters.com/workshops/fullstack-typescript/) course.

The project consists of a monorepo containing a React client with an Apollo GraphQL backend, backed by a local json db.

Running `yarn dev` starts both the client app and the GraphQL server.

## Notes

### GraphQL

GraphQL `queries` fetch data, `mutations` update (synonymous with POST/PUT). For each entity in the schema we provide a resolver to return the data when queried.

- GraphQL schema provides the graph schema and the types for client/server
- TS types as well as accessor hooks etc are generated using `codegen`.
- GraphQL sandbox studio can be used to interrogate the server for debugging.
- In queries use `__typename` to debug the returned types. e.g. `query ExampleQuery { trends { __typename } }`
- Be mindful of caching performance - the bigger the schema the less confidence you will have about side effects.

See docs https://www.apollographql.com/docs/

## Legal

&copy; 2022 Mike North, all rights reserved.
