const { ApolloServer } = require('apollo-server')
const { ApolloServer: ApolloServerLambda,  } = require('apollo-server-lambda')

const { ApolloGateway } = require('@apollo/gateway')

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:4001/graphql' },
    { name: 'posts', url: 'http://localhost:4002/graphql' }
  ]
})

// ;(async () => {

//   const { schema, executor } = await gateway.load()

//   const server = new ApolloServer({ schema, executor })

//   server.listen().then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`)
//   })
// })()

const createHandler = async () => {
  const { schema, executor } = await gateway.load();
  const server = new ApolloServerLambda({
    schema,
    executor,
    introspection: true,
    playground: true,
    context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    }),
  });
  // eslint-disable-next-line no-return-await
  return server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
      methods: 'GET, POST',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
exports.graphqlHandler = (event, context, callback) => {
  createHandler().then(handler => handler(event, context, callback));
};
