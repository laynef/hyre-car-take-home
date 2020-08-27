import express from 'express';
// import { graphqlExpress } from 'apollo-server-express';
import { graphqlHTTP } from 'express-graphql';
import schema from '../controllers';

// Router
const router = express();

// Set Routes
router.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

// Export
export default router;
